"use client";

interface Props {
  routeLabel: string;
  onContinue: () => void;
  onRestart: () => void;
}

// "El canal cambia; el contexto no." Cuando alguien vuelve a una ruta donde ya había
// avanzado, se lo decimos explícitamente en vez de retomar en silencio o reiniciar.
export default function ResumeScreen({ routeLabel, onContinue, onRestart }: Props) {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-xl flex-col justify-center px-6 py-12">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">Continuidad</p>
      <h1 className="title-serif mb-3 text-2xl font-bold text-ink md:text-3xl">Volvamos donde quedamos</h1>
      <p className="mb-8 text-muted">
        Ya habías avanzado en <strong>{routeLabel}</strong>. El canal puede cambiar, pero el contexto no se pierde.
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={onContinue}
          className="rounded-[13px] bg-ink px-6 py-4 text-left font-bold text-paper transition hover:-translate-y-0.5"
        >
          Continuar mi recorrido →
        </button>
        <button
          onClick={onRestart}
          className="rounded-[13px] border border-ink px-6 py-4 text-left font-bold text-ink transition hover:-translate-y-0.5"
        >
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}
