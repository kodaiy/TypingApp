import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Cloud from '../elements/Cloud';
import RabbitTitle from '../elements/RabbitTitle';
import BearTitle from '../elements/BearTitle';
import Mountain from '../elements/Mountain';
import RectButton from '../elements/RectButton';
import BannerAd from '../components/BannerAd';

class TitleScreen extends React.Component {
  pressStart() {
    this.props.navigation.navigate('LevelSelect');
  }

  pressPictureBook() {
    this.props.navigation.navigate('PictureBook');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>

          <Cloud style={{ left: 20, top: 35 }} />
          <Cloud style={{ right: 20, top: 65 }} />
          <Mountain />
          <RabbitTitle />
          <BearTitle />

          <View style={styles.title}>
            <Text style={styles.titleText}>
              楽しい！
            </Text>
            <Text style={styles.titleText}>
              タイピング教室
            </Text>
          </View>

        </View>

        <View style={styles.buttonArea}>

          <View style={styles.subButtonArea}>
            <RectButton
              style={styles.button}
              onPress={this.pressStart.bind(this)}
            >
              始める
            </RectButton>
            <RectButton
              style={styles.button}
              onPress={this.pressPictureBook.bind(this)}
            >
              図鑑を見る
            </RectButton>
          </View>

          <View style={styles.subButtonArea}>
            <RectButton style={styles.button}>
              記録を見る
            </RectButton>
          </View>

        </View>

        <BannerAd />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#08F1F1',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 65,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // elevation: 9, テキストに対しては有効でないようなので、修正必要
  },
  titleText: {
    fontSize: 36,
    color: '#4040BC',
    lineHeight: 45,
    textAlign: 'center',
  },
  buttonArea: {
    backgroundColor: '#7FE21D',
    flex: 2,
  },
  subButtonArea: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#42E41A',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default TitleScreen;
