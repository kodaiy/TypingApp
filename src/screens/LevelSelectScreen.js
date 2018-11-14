import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Cloud from '../elements/Cloud';
import RabbitTitle from '../elements/RabbitTitle';
import BearTitle from '../elements/BearTitle';
import Mountain from '../elements/Mountain';
import RectButton from '../elements/RectButton';
import BannerAd from '../components/BannerAd';

class LevelSelectScreen extends React.Component {
  pressLevel(level) {
    this.props.navigation.navigate('Game', { level });
    console.log('test', level);
    // this.props.navigation.navigate('Game');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>

          <Cloud style={{ left: 20, top: 35 }} />
          <Cloud style={{ right: 20, top: 65 }} />

          <View style={styles.levelArea}>
            <RectButton
              style={styles.levelButton}
              onPress={() => {
                const level = 'elementary';
                this.pressLevel(level);
              }}
            >
              初級
            </RectButton>

            <RectButton
              style={styles.levelButton}
              onPress={() => {
                const level = 'intermediate';
                this.pressLevel(level);
              }}
            >
              中級
            </RectButton>

            <RectButton
              style={styles.levelButton}
              onPress={() => {
                const level = 'advanced';
                this.pressLevel(level);
              }}
            >
              上級
            </RectButton>
          </View>

          <Mountain />
          <RabbitTitle />
          <BearTitle />

        </View>

        <View style={styles.buttonArea}>
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
  levelArea: {
    marginBottom: 70,
  },
  levelButton: {
    backgroundColor: '#1D8BF1',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonArea: {
    backgroundColor: '#7FE21D',
    flex: 2,
  },
});

export default LevelSelectScreen;
