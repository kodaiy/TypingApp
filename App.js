import { createStackNavigator } from 'react-navigation';
import TitleScreen from './src/screens/TitleScreen';

const App = createStackNavigator({
  Title: { screen: TitleScreen },
});

export default App;
