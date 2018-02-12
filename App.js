import {
      StackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import Options from './OptionsScreen';


const App = StackNavigator({
      Home: { screen: HomeScreen },
      Options: { screen: OptionsScreen },
});
