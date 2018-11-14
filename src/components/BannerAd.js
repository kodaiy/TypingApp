import React from 'react';
import {
  Platform,
} from 'react-native';
import { AdMobBanner } from 'expo';

class BannerAd extends React.Component {
  // bannerError(error) {
  //   console.log(error);
  // }

  render() {
    const adUnitID = Platform.select({
      ios: 'ca-app-pub-3119425256501578/5508742787',
      android: 'ca-app-pub-3119425256501578/7204844123',
    });

    return (
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adUnitID}
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={(error) => {
          console.log(error);
        }}
      />
    );
  }
}

export default BannerAd;
