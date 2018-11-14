import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

class LevelSelectScreen extends React.Component {
  render() {
    return (
      <Text style={styles.testtext}>level select screen</Text>
    );
  }
}

const styles = StyleSheet.create({
  testtext: {
    fontSize: 40,
  },
});

export default LevelSelectScreen;
