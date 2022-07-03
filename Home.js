import  React,{Component} from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, } from 'react-native';
import Calendar from './Calendar'
import { Card } from 'react-native-paper';


export default class Home extends Component {
  render(){
     const name = this.props.navigation.getParam('name')
     const Task = this.props.navigation.getParam('task')
  
 

    const Taskdescription = this.props.navigation.getParam('taskdescription')
    return(
      <View style={styles.container}>
      <Card style={styles.card}>
      <Text style={styles.txt}>Welcome, {name}</Text>
<Calendar/>
<Card>{Task}</Card>
<Card>{Taskdescription}</Card>
<TouchableOpacity style={styles.button} onPress={()=> {this.props.navigation.navigate('CreateTask')}}>➕</TouchableOpacity>
      </Card>
      </View> 
  
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex:1,

    backgroundColor:'#C4DDFF'
  },

   button:{
    borderWidth:3,
    borderRadius:20,
    width:60,

    alignItems:"center",
    alignSelf:"center",
    margin:20,
    padding:10, 
    fontSize:15
  },
    card:{
      padding:5,
      height:window.innerHeight-20,
    justifyContent:"space-around",
    borderRadius:20,
    margin:10,
    backgroundColor:'#E8F9FD',
    color:'#0AA1DD'
    },
     txt:{

    color:"#001D6E",
    fontFamily:"cursive",
    fontSize:20,
    marginLeft:5,
    marginBottom:30

  },

}); 
