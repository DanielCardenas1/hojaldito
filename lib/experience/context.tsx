"use client";

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import type { Dispatch, ReactNode } from "react";
import { experienceReducer } from "./reducer";
import type { ExperienceAction } from "./reducer";
import { initialExperienceState } from "./types";
import type { ExperienceState } from "./types";

const STORAGE_KEY = "hojaldito_experience_v1";

interface ExperienceContextValue {
  state: ExperienceState;
  dispatch: Dispatch<ExperienceAction>;
  // Expuesto para que consumidores (p. ej. RouteRunner) puedan distinguir "todavía no sé
  // qué había guardado" de "ya revisé y no había nada" — necesario para decisiones que
  // solo deben tomarse una vez, con el dato ya hidratado (ver detección de "retomar").
  isHydrated: boolean;
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(experienceReducer, initialExperienceState);
  // Evita que el efecto de persistencia escriba (y sobreescriba lo guardado) antes de que
  // la hidratación haya tenido la oportunidad de leerlo: sin este guard, en desarrollo con
  // React Strict Mode (efectos invocados dos veces) el segundo montaje podía leer un
  // localStorage ya vaciado por el primero y perder el progreso guardado.
  const [isHydrated, setIsHydrated] = useState(false);

  // Retomar donde el cliente quedó (regla: "abandono, permitir retomar sin perder contexto").
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const payload = JSON.parse(raw) as ExperienceState;
        dispatch({ type: "HYDRATE", payload });
      }
    } catch {
      // localStorage no disponible (modo privado, etc.): seguimos con el estado inicial.
    } finally {
      setIsHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // almacenamiento lleno o bloqueado: no debe interrumpir la experiencia.
    }
  }, [state, isHydrated]);

  return (
    <ExperienceContext.Provider value={{ state, dispatch, isHydrated }}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const ctx = useContext(ExperienceContext);
  if (!ctx) {
    throw new Error("useExperience debe usarse dentro de <ExperienceProvider>");
  }
  return ctx;
}
