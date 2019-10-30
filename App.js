import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Heading from './Heading';
import Input from './TextInput';
import Button from './Button';
import TodoList from './TodoList';

let todoIndex = 0;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log('Input value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos, inputValue: ''}, () => {
      console.log('State: ', this.state);
    });
  }

  toggleComplete() {}

  deleteTodo() {}

  render() {
    let {inputValue, todos} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <View>
            <Heading />
            <Input
              inputValue={inputValue}
              inputChange={text => this.inputChange(text)}
            />
            <TodoList todos={todos} />
            <Button submitTodo={this.submitTodo} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
