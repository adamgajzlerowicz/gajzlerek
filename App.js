import {
      StackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import OptionsScreen from './OptionsScreen';


const App = StackNavigator({
      Home: { screen: HomeScreen },
      Options: { screen: OptionsScreen },
});

export default App;
