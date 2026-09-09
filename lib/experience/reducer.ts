import { ROUTE_DONE, initialExperienceState } from "./types";
import type { ExperienceState, RouteId } from "./types";

export type ExperienceAction =
  | { type: "HYDRATE"; payload: ExperienceState }
  | { type: "SET_ENTRY_CONTEXT"; payload: Partial<ExperienceState> }
  | {
      type: "ADVANCE";
      routeId: RouteId;
      fromStep: string;
      patch: Partial<ExperienceState>;
      next: string;
    }
  | { type: "GO_BACK"; routeId: RouteId }
  | { type: "GOTO_STEP"; routeId: RouteId; stepId: string }
  | { type: "RESET_ROUTE"; routeId: RouteId };

export function experienceReducer(
  state: ExperienceState,
  action: ExperienceAction
): ExperienceState {
  switch (action.type) {
    case "HYDRATE": {
      return { ...state, ...action.payload, routes: { ...action.payload.routes } };
    }

    case "SET_ENTRY_CONTEXT": {
      return { ...state, ...action.payload, lastInteractionAt: Date.now() };
    }

    case "ADVANCE": {
      const { routeId, fromStep, patch, next } = action;
      const current = state.routes[routeId] ?? {
        stepId: fromStep,
        backStack: [],
        completed: false,
      };
      const mergedAnswers = { ...state.answers, ...(patch.answers ?? {}) };
      const isDone = next === ROUTE_DONE;

      return {
        ...state,
        ...patch,
        answers: mergedAnswers,
        history: [...state.history, `${routeId}:${fromStep}`],
        routes: {
          ...state.routes,
          [routeId]: {
            stepId: isDone ? fromStep : next,
            backStack: [...current.backStack, fromStep],
            completed: isDone ? true : current.completed,
          },
        },
        lastInteractionAt: Date.now(),
      };
    }

    case "GO_BACK": {
      const current = state.routes[action.routeId];
      if (!current || current.backStack.length === 0) return state;
      const backStack = [...current.backStack];
      const prevStep = backStack.pop()!;
      return {
        ...state,
        routes: {
          ...state.routes,
          [action.routeId]: { ...current, stepId: prevStep, backStack },
        },
      };
    }

    case "GOTO_STEP": {
      const current = state.routes[action.routeId] ?? {
        stepId: action.stepId,
        backStack: [],
        completed: false,
      };
      return {
        ...state,
        routes: {
          ...state.routes,
          [action.routeId]: { ...current, stepId: action.stepId },
        },
      };
    }

    case "RESET_ROUTE": {
      const routes = { ...state.routes };
      delete routes[action.routeId];
      return { ...state, routes };
    }

    default:
      return state;
  }
}

export { initialExperienceState as initialState };
