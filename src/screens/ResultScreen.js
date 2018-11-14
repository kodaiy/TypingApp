import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

class ResultScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Result Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});

export default ResultScreen;
