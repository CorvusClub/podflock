import { ScrollView, StyleSheet, Text, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "cornflowerblue",
        flexGrow: 1,
    },
});

export const Home = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <Text>Hi World</Text>
        </ScrollView>
    );
};
