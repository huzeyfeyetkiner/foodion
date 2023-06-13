import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image2}
        source={require("../assets/image2.png")}
      ></Image>
      <View style={styles.loginContainer}>
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <TextInput style={styles.textInput} placeholder="Your Phone" />
        <TextInput style={styles.textInput} placeholder="Your Password" />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.defButton, styles.signUpButton]}>
            <Text style={{ color: "#fff" }}>Signup</Text>
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginContainer: {
    borderTopLeftRadius: 30,
  },
  image2: {
    width: "100%",
    height: 200,
  },
  textInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#EDEDED",
    borderRadius: 30,
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 10,
    justifyContent: "center",
  },
  defButton: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  signUpButton: {
    backgroundColor: "#F34900",
  },
  dontAcc: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    width: "100%",
  },
});
