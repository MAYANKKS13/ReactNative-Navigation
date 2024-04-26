import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import CourseList from "./screens/CourseList";
import { AboutStack } from "./AppStack";
import { AboutDrawer } from "./AppDrawer";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: '#8fce2b'
            }}>
                <Tab.Screen name="Profile Screen" component={ProfileScreen} />
                <Tab.Screen name="Course List Screen" component={CourseList} />
                <Tab.Screen name="About Stack" component={AboutStack} />
                <Tab.Screen name="About Drawer" component={AboutDrawer} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}