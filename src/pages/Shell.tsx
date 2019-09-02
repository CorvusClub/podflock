import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "@navigation/history";
import { RouteMapping } from "@navigation/RouteMapping";
import { SafeAreaView, StatusBar } from "react-native";

export const Shell = () => (
    <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ConnectedRouter history={history}>
                <RouteMapping />
            </ConnectedRouter>
        </SafeAreaView>
    </>
);
