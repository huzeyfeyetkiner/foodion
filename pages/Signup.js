import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image2}
        source={require("../assets/image2.png")}
      ></Image>
      <View style={styles.loginContainer}>
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.defButton, styles.loginButton]}>
            <Text style={{ color: "#fff" }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.defButton]}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#000", fontWeight: 600 }}>
              Login via Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.defButton]}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#000", fontWeight: 600 }}>
              Continue without login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.defButton]}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#F34900", fontWeight: 600 }}>More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <View style={styles.dontAcc}>
              <Text style={{ color: "#837F95" }}>Dont have an acount yet?</Text>
              <Text style={{ color: "#F34900" }}>Signup</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
