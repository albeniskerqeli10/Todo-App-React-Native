import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity , SafeAreaView , FlatList , ScrollView } from 'react-native';
import { FaBeer } from 'react-icons/fa';
export default function App() {
  const [todos,setTodos] = useState([
 
  ]);

  const [text,setText] = useState('');

  const HandleClick = () => {
if(text=='') {
  alert('Fill the fields');
}

else {
  setTodos([...todos, {name:text, description:"new" , id:Math.random() * 100000}]);
  setText('');
}
   


  }

  const HandleDelete = (id) => {
    const removeTodo = [...todos].filter(todo => todo.id !== id);
    setTodos(removeTodo);
  
  }

  return (
    <View style={styles.container}>
   <View style={styles.form}>
      <Text style={styles.text}>Todo App</Text>
      <TouchableOpacity></TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Write any Todo"
        value={text}
        onChangeText={text=> setText(text)}
      />
        <TouchableOpacity onPress={e =>HandleClick()}  borderColor="transparent" style={styles.touch} >
            <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
        </View>
        <ScrollView  style={styles.list}>
<View style={styles.todo}>
  {todos.map(todo => (
   <View key={todo.id} style={styles.item}>
   <Text style={styles.itemText}>{todo.name}</Text>
   <TouchableOpacity  onPress={() => HandleDelete(todo.id)}  style={styles.btn} >
   <Text style={styles.itemText}>❌</Text>
   </TouchableOpacity>

   </View>
    
  ))}
</View>
</ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249,250,255)',
    alignItems: 'center',
    overflow:"scroll",

    justifyContent: 'center',
  },

todo : {
flex:1,
alignItems:'center',
justifyContent:"center",
textAlign:"center",
},


btn : {
padding:7,
backgroundColor:"#1C1C1C"
},

  text : {
     fontSize: 30,


  },

  form : {
    flex:1,
    marginTop: StatusBar.currentHeight || 100,
    width:'100%',
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",

  },

  item: {
backgroundColor:"#1c1c1c",
marginTop:20,
color:'white',
marginBottom:20,
width:"100%",
alignItems:"center",
justifyContent:'space-around',
flexDirection:"row",
minHeight:50,
  },

  itemText: {
    color:"white",
    textAlign:"center",


  },

  list : {
    flex:1,
    backgroundColor:"transparent",
    width:"100%",
    maxWidth:"80%",
    overflow:"scroll",
    
    marginTop: StatusBar.currentHeight || 50,
  },

  input: {
    width:'100%',
    maxWidth:"80%",
    minHeight:50,
    color:"black",
    margin:20,
    backgroundColor:"white",
    shadowColor: "gray",

    shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,

  elevation: 2,
  },

  touch : {
    backgroundColor:"#344ffe",
    color:"white",
    padding:20,
    margin:20,
  },

  buttonText:{
    color:"#fff",
  
  }
});
