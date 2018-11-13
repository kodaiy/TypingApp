import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AdMobBanner } from 'expo';

class TitleScreen extends React.Component {
  bannerError(error) {
    console.log(error);
  }

  render() {
    const adUnitID = Platform.select({
      ios: 'ca-app-pub-3119425256501578/5508742787',
      android: 'ca-app-pub-3119425256501578/7204844123',
    });

    return (
      <View style={styles.container}>
        <View style={styles.body}>

          <Image
            style={styles.cloudLeft}
            source={require('../../assets/pictures/cloud.png')}
          />

          <Image
            style={styles.cloudRight}
            source={require('../../assets/pictures/cloud.png')}
          />

          <View style={styles.title}>
            <Text style={styles.titleText}>
              楽しい！
            </Text>
            <Text style={styles.titleText}>
              タイピング教室
            </Text>
          </View>

          <Image
            style={styles.mountain}
            source={require('../../assets/pictures/mountain.png')}
          />

          <Image
            style={styles.rabbit}
            source={require('../../assets/pictures/rabbit_title_100x200.png')}
          />

          <Image
            style={styles.bear}
            source={require('../../assets/pictures/bear_title_100x200.png')}
          />

        </View>

        <View style={styles.buttonArea}>
          <View style={styles.subButtonArea}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>始める</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>図鑑を見る</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subButtonArea}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>記録を見る</Text>
            </TouchableOpacity>
          </View>
        </View>

        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={adUnitID}
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={this.bannerError}
        />
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
  cloudLeft: {
    position: 'absolute',
    left: 20,
    top: 35,
  },
  cloudRight: {
    position: 'absolute',
    right: 20,
    top: 65,
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
  mountain: {
    height: 140,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  rabbit: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    height: 200,
    width: 100,
  },
  bear: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    height: 200,
    width: 100,
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
    height: 55,
    width: 120,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  adArea: {
    backgroundColor: '#ddd',
    flex: 1,
  },
});

export default TitleScreen;
