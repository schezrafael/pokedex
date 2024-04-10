import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../screens/Account";
import PokedexScreen from "../screens/Pokedex";
import FavoriteScreen from "../screens/Favorite";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
