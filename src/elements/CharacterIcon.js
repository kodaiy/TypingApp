import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

class CharacterIcon extends React.Component {
  render() {
    // 呼び出されるごとに親からの引数により表示キャラクター画像を変える
    this.src = '';
    switch (this.props.iconNo) {
      case 0:
        this.src = require('../../assets/pictures/00_rabbit_icon_50x100.png');
        break;

      case 1:
        this.src = require('../../assets/pictures/01_bear_icon_50x100.png');
        break;

      default:
        break;
    }

    // 表示位置を親から受ける
    const { style } = this.props;

    return (
      <Image
        style={[styles.icon, style]}
        source={this.src}
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

export default CharacterIcon;
