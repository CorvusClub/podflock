import { ReducerChain } from "@utils/buildReducer";
import { SubscriptionActions } from "@redux/actions/subscriptionActions";

export const subscriptionReducer = new ReducerChain({})
    .on(SubscriptionActions.ADD_SUBSCRIPTION, (state, action) => {
        return state;
    })
    .on(SubscriptionActions.REMOVE_SUBSCRIPTION, (state, action) => {
        return state;
    })
    .build<SubscriptionActions>();
