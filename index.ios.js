import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('mobilecrashcoursedemo1', () => App);
Navigation.registerComponent('mobilecrashcoursedemo1-another', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'mobilecrashcoursedemo1'
      },
      stack: {
        id: 'TEST',
        children: [{
          component: {
            name: 'mobilecrashcoursedemo1-another',
            passProps: {
              text: 'This is screen 2'
            }
          }
        }],
      },
      options: {
        topBar: {
          title: {
            text: 'Welcome screen'
          }
        }
      }
    },
  });
});

