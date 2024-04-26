import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Text, View, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
       return (
          <Stack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: '#2f6ae1'},
                headerTitleStyle: {fontWeight: 'bold'},
                headerTintColor: '#ebeef5',
              }}>
            <Stack.Screen
              name='Home' 
              component={HomeScreen} 
              options={{
                headerTitle: "My Home"
              }} 
            />
            <Stack.Screen 
              name='About'
              component={AboutScreen}
              options={{
                headerTitle: "About"
              }} 
            />
            </Stack.Navigator>
       );
}

export default function App() {
  return (
   
      <NavigationContainer>
         <AboutStack />
      </NavigationContainer>
  

  );
}