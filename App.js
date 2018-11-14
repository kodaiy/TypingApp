import { createStackNavigator } from 'react-navigation';
import TitleScreen from './src/screens/TitleScreen';
import LevelSelectScreen from './src/screens/LevelSelectScreen';
import PictureBookScreen from './src/screens/PictureBookScreen';

const App = createStackNavigator({
  Title: {
    screen: TitleScreen,
    navigationOptions: {
      headerTitle: '楽しい！タイピング教室',
    },
  },
  LevelSelect: {
    screen: LevelSelectScreen,
    navigationOptions: {
      headerTitle: 'レベル選択',
    },
  },
  PictureBook: {
    screen: PictureBookScreen,
    navigationOptions: {
      headerTitle: '図鑑',
    },
  },
}, {
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#24D2D2',
    },
    headerTitleStyle: {
      fontSize: 26,
    },
  },
});

export default App;
