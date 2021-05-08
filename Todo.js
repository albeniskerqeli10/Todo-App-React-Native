import React from 'react'
import {Text , View} from 'react-native';
const Todo = (props) => {
    return (
        <View>
      <Text style={props.style}>{props.name}</Text>
      <Text style={props.style}>{props.icon}</Text>
      </View>
    )
}

export default Todo
