import React, {Component} from "react";
import {CreateSwitchNavigator, createAppContainer} from "react-navigation";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {Card} from "react-native-paper";

export default class DisplayTask extends Components{
    render(){
        const Task = this.props.navigation.getParam('task')
        const Taskdescription = this.props.navigation.getParam('taskdescription')
        return(
            <View style = {styles.container}>
                <Card style = {styles.card}>
                    <Card style = {styles.card2}>
                    ▢  {Task}
                    </Card>
                    <Card style = {styles.card2}>
                    ▢  {Taskdescription}
                    </Card>
                    <TouchableOpacity style = {styles.btn}
                        onPress = {() => this.props.navigation.navigate('Home',{task: Task, taskdescription: Taskdescription})}>
                        <Text style = {styles.text}>Go back</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7FB5FF"
    },

    btn: {
        borderWidth: 4,
        borderRadius: 10,
        marginBottom: 4
    },

    text: {
        color: "#001D6E",
        fontFamily: "cursive",
        fontSize: 20,
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 30
    },

    card: {
        padding: 50,
        height: window.innerHeight-20,
        justifyContent: "center",
        borderRadius: 20,
        margin: 10,
        backgroundColor: "#EF89FD",
        color: "#0AA1DD",
        alignItems: "center"
    },

    card2: {
        width: window.innerWidth-40,
        height: 80,
        margin: 10,
    }
})