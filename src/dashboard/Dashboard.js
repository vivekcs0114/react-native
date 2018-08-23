import React from 'react';
import { ScrollView } from 'react-native';
import TodoList from '../user/TodoList';
 
export default class Dashboard extends React.Component {
  someFunction = () => {

  }
  render() {
    return (
      <ScrollView>
        <TodoList />
      </ScrollView>
    );
  }
}