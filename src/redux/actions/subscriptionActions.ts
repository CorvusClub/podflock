import { createAction } from "@utils/createAction";

export enum SubscriptionActions {
    ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION",
    REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION",
}

export const subscriptionActions = {
    addSubscription: createAction(SubscriptionActions.ADD_SUBSCRIPTION, (url: string) => ({ url })),
    removeSubscription: createAction(SubscriptionActions.REMOVE_SUBSCRIPTION, (url: string) => ({ url })),
};
