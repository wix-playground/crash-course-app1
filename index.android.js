import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('mobilecrashcoursedemo1', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'mobilecrashcoursedemo1'
      }
    }
  });
});

