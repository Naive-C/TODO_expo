import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native';

import TodoTab from './Screens/TodoTab';
import DoneTab from './Screens/DoneTab'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo" component = {TodoTab}/>
        <Tab.Screen name="Done" component = {DoneTab}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    fontSize: 40, 
    fontWeight: 'bold',
    padding: 40
  }
});
