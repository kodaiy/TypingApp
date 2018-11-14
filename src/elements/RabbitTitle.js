import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

const src = require('../../assets/pictures/rabbit_title_100x200.png');

class RabbitTitle extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <Image
        style={[styles.rabbit, style]}
        source={src}
        // source={require('../../assets/pictures/cloud.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  rabbit: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    height: 200,
    width: 100,
  },
});

export default RabbitTitle;
