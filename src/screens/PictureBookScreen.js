import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

class PictureBookScreen extends React.Component {
  render() {
    return (
      <Text style={styles.testtext}>test page</Text>
    );
  }
}

const styles = StyleSheet.create({
  testtext: {
    fontSize: 40,
  },
});

export default PictureBookScreen;
