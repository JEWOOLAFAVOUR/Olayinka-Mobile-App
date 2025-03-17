import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.helloText}>Hello World to you all</Text>
            <Text style={{ fontSize: 20, color: "red" }}>My name is Micheal</Text>

            <Button title="Submit" color={"green"} />

            <Button title="Reset" color={"blue"} />

        </View>
    )
};

export default App;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    helloText: {
        fontSize: 30,
        color: 'black',
        fontWeight: "bold",
    },
});