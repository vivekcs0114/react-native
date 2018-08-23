import React, { Component } from 'react';
import { Button, ScrollView, TextInput, StyleSheet, View, Text } from 'react-native';
import { List } from 'react-native-elements'


export default class TodoList extends Component {
	constructor(props) {
	    super();
	    this.state = {
	        todo : '',
            todos : ['Learn React', 'React Native', 'Spring Boot'],
            refresh: false
	    }
	}
	addTodo = () => {
        if(this.state.todo === '') {
            return;
        }
        let todos = this.state.todos;
        todos.push(this.state.todo);
		this.setState({
            todos: todos,
            refresh: !this.state.refresh
        });
	}
	removeTodo = (item) => {
	    let todos = this.state.todos;
	    let index = this.state.todos.indexOf(item)
	    todos.splice(index, 1);
	    this.setState({
	        todos: todos
	    });
	}
	render() {
		return (
            <ScrollView>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "add todo item ......"
               onChangeText = {(todo) => this.setState({todo})}/>
            <Button onPress={this.addTodo} title="Add" />
            <List containerStyle={{marginBottom: 20}}>
            {
                this.state.todos.map((todo) => (
                    <View key={todo} style={{flexDirection: 'row'}}>
                        <Text key={todo}>{todo}</Text>
                        <View style={{alignSelf: 'flex-end'}}>
                        <Button
                            onPress={() => this.removeTodo(todo)}
                            title="remove"
                            color="red"
                        />
                        </View>
                    </View>
                ))
            }
            </List>
		  </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
    input: {
       margin: 10,
       height: 40
    }
 })