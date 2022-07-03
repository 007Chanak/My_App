import React, {Component} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from "react-nativr";
import Calender from 'react-Calendar';
import {Card} from 'react-native-paper';
import {RFvalue} from 'react-native-responsive-fontsize';

export default class Front extends Component{
    constructor(){
        super()
        this.state={
            name: " "
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Card styles = {styles.card}>What's your name?
                    <TextInput style = {styles.inputFont}onChangeText = {name =>{this.setState({name})}}></TextInput>
                    <TouchableOpacity style = {styles.button}onPress = {() => {this.props.navigation.navigate("Home",{name: this.state.name})}}>
                        Next
                    </TouchableOpacity>

                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C4DDFF",
        alignItems: "center",
        justifyContent: "center"
    },
    
    button: {
        borderWidth: 2,
        borderRadius: 20,
        width: 80,
        height: 40,
        alignItems: "center",
        alignSelf: "center",
        margin: 30,
        fonstSize: 20
    },

    card: {
        padding: 60,
        height: RFvalue(300),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    inputFont: {
        height: RFvalue(40),
        borderColor: "#001D6E",
        borderWidth: RFvalue(1),
        borderRadius: RFvalue(10),
        paddingLeft: RFvalue(10),
        color: "001D6E"
    }
});