declare global {
  interface GlobalReducerEvent {
    LOG_IN: {
      type: "LOGIN_IN";
      isAuthenticated: true
    },
    LOG_OUT: {
      type: "LOG_OUT";
      isAuthenticated: false
    }
  }
}

export type GlobalReducer<TState> = (
  state: TState,
  action: {
    [ActionType in keyof GlobalReducerEvent]: {
      type: ActionType;
    } & GlobalReducerEvent[ActionType];
  }[keyof GlobalReducerEvent]
) => TState;

export const authenticationReducer: GlobalReducer<{ isAuthenticated: boolean }> = (state, action) => {
  console.log("🚀 ~ file: globalReducer.d.ts ~ line 21 ~ state", state);
  console.log("🚀 ~ file: globalReducer.d.ts ~ line 21 ~ action", action);
  console.log(action.type)
  return state;
};
