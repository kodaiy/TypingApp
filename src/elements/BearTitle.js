import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

const src = require('../../assets/pictures/bear_title_100x200.png');

class BearTitle extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <Image
        style={[styles.bear, style]}
        source={src}
        // source={require('../../assets/pictures/cloud.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  bear: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    height: 200,
    width: 100,
  },
});

export default BearTitle;
