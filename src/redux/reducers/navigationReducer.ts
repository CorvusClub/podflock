import { connectRouter } from "connected-react-router";
import { history } from "@navigation/history";
import { BackHandler } from "react-native";

export const navigationReducer = connectRouter(history);
export type NavigationState = ReturnType<typeof navigationReducer>;

BackHandler.addEventListener("hardwareBackPress", () => history.goBack());
