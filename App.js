import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Row from './Components/Row';
import Button from './Components/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      current: '',
      previous: '',
    };
  }

  keyPressed = (value, type) => {
    if (type === 'number') {
      this.setState({
        current: this.state.current + value,
      });
    }
    if (type === 'operator') {
      if (value != '=') {
        if (this.state.current == '') {
          this.setState({
            current: this.state.result + value,
          });
        } else {
          this.setState({
            current: this.state.current + value,
          });
        }
      } else if (value == '=') {
        console.log(eval(this.state.current));
        this.setState({
          result: eval(this.state.current),
          previous: this.state.current,
          current: '',
        });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Text style={styles.value}>
            {this.state.current == '' ? this.state.result : this.state.current}
          </Text>
        </View>

        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => {
              this.setState({
                current: '',
                result: 0,
              });
            }}
          />
          <Button text="+/-" theme="secondary" />
          <Button
            text="%"
            theme="secondary"
            onPress={() => {
              this.setState({
                current: this.state.current + '%',
              });
            }}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => this.keyPressed('/', 'operator')}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => this.keyPressed(7, 'number')} />
          <Button text="8" onPress={() => this.keyPressed(8, 'number')} />
          <Button text="9" onPress={() => this.keyPressed(9, 'number')} />
          <Button
            text="*"
            theme="accent"
            onPress={() => this.keyPressed('*', 'operator')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => this.keyPressed(4, 'number')} />
          <Button text="5" onPress={() => this.keyPressed(5, 'number')} />
          <Button text="6" onPress={() => this.keyPressed(6, 'number')} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.keyPressed('-', 'operator')}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => this.keyPressed(1, 'number')} />
          <Button text="2" onPress={() => this.keyPressed(2, 'number')} />
          <Button text="3" onPress={() => this.keyPressed(3, 'number')} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.keyPressed('+', 'operator')}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => this.keyPressed(0, 'number')}
          />
          <Button
            text="."
            onPress={() => {
              this.setState({
                current: this.state.current + '.',
              });
            }}
          />

          <Button
            text="="
            theme="accent"
            onPress={() => this.keyPressed('=', 'operator')}
          />
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});
