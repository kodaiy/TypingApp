import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

class GameScreen extends React.Component {
  transferToResult() {
    this.props.navigation.navigate('Result');
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text>{params.level}</Text>
          <Text>Game Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#08F1F1',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
