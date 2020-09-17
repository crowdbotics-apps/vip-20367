import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps102950Navigator from '../features/Maps102950/navigator';
import Add-Item102949Navigator from '../features/Add-Item102949/navigator';
import Maps102945Navigator from '../features/Maps102945/navigator';
import UserProfile102941Navigator from '../features/UserProfile102941/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps102950: { screen: Maps102950Navigator },
Add-Item102949: { screen: Add-Item102949Navigator },
Maps102945: { screen: Maps102945Navigator },
UserProfile102941: { screen: UserProfile102941Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
