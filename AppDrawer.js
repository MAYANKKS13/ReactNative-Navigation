import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export const AboutDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: '#000000',
            drawerActiveBackgroundColor: '#d3b9b9',
            drawerContentStyle: {
                backgroundColor: '#eee5e1'
            }
       }}>
           <Drawer.Screen
              name="Dashboard"
              component={DashboardScreen}
          />
           <Drawer.Screen name="Settings" component={SettingsScreen} />
       </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <AboutDrawer />
        </NavigationContainer>
    );
}