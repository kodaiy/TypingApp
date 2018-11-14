import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

class RectButton extends React.Component {
  render() {
    const { style, onPress } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default RectButton;
