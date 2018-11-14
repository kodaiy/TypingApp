import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

const src = require('../../assets/pictures/cloud.png');

class Cloud extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <Image
        style={[styles.cloud, style]}
        source={src}
        // source={require('../../assets/pictures/cloud.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  cloud: {
    position: 'absolute',
  },
});

export default Cloud;
