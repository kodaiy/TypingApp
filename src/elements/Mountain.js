import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

const src = require('../../assets/pictures/mountain.png');

class Mountain extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <Image
        style={[styles.mountain, style]}
        source={src}
        // source={require('../../assets/pictures/cloud.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  mountain: {
    height: 140,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default Mountain;
