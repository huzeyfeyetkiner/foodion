import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>foodion</Text>
      {/* <StatusBar style="auto" /> */}
      <Image
        style={styles.image1}
        source={require("../assets/image1.png")}
      ></Image>
      <Text style={styles.text1}>
        Please sign up or login to be able to buy your next ticket
      </Text>
      <View style={styles.buttonsHome}>
        <TouchableOpacity
          style={[styles.defButton, styles.sUpButton]}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ color: "#F34900" }}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.defButton, styles.loginButton]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "900",
    fontSize: 35,
    color: "#F34900",
  },
  image1: {
    width: 350,
    height: 300,
  },
  text1: {
    width: 180,
  },
  buttonsHome: {
    marginTop: 40,
    width: 250,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  defButton: {
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  sUpButton: {
    backgroundColor: "#fff",
    borderColor: "black",
  },
  loginButton: {
    backgroundColor: "#F34900",
  },
});
