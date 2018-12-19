import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

const src = require('../../assets/pictures/01_rabbit_icon_50x100.png');

class I01RabbitIcon extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <Image
        style={[styles.icon, style]}
        source={src}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    height: 100,
    width: 50,
  },
});

export default I01RabbitIcon;
