import { Reducer, Action } from "redux";

export class ReducerChain<State, UsedActions extends string = never> {
    initialState: State;
    reducers = new Map();
    constructor(initialState: State) {
        this.initialState = initialState;
    }

    on<ActionType extends string, TargetAction extends Action<ActionType>>(
        key: ActionType,
        handler: (state: State, action: TargetAction) => unknown
    ): ReducerChain<State, UsedActions | ActionType> {
        this.reducers.set(key, handler);

        return this;
    }
    build<AllActionKeys extends UsedActions>(): Reducer<State, Action<AllActionKeys>> {
        return (state: State = this.initialState, action: Action<string>): State => {
            if (this.reducers.has(action.type)) {
                return this.reducers.get(action.type)(state, action);
            }
            return state;
        };
    }
}
