import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Home" }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ title: "Login" }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ title: "Signup" }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ title: "Main" }}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
