declare global {
  interface ActionTypes {
    LOG_IN: {
      type: "LOGIN_IN";
      isAuthenticated: boolean
    },
    LOG_OUT: {
      type: "LOG_OUT";
      isAuthenticated: boolean
    }
  }
}

export type GlobalReducer<TState> = (
  state: TState,
  action: {
    [ActionType in keyof ActionTypes]: {
      type: ActionType;
    } & ActionTypes[ActionType];
  }[keyof ActionTypes]
) => TState;

export const authenticationReducer: GlobalReducer<{ isAuthenticated: boolean }> = (state, action) => {
  console.log("🚀 ~ file: globalReducer.d.ts ~ line 21 ~ state", state);
  console.log("🚀 ~ file: globalReducer.d.ts ~ line 21 ~ action", action);
  console.log(action.type)
  return state;
};
