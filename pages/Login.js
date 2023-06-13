import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SIcon from "react-native-vector-icons/SimpleLineIcons";
import EIcon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/FontAwesome5";

export default function Login() {
  const [moreToggle, setMoreToggle] = useState(false);

  if (moreToggle) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image2}
          source={require("../assets/image2.png")}
        ></Image>
        <View style={styles.loginContainer}>
          <View style={styles.toggleHeader}>
            <TouchableOpacity
              onPress={() => {
                setMoreToggle(false);
              }}
              style={styles.toggleButton}
            >
              <FIcon color={"#F34900"} size={24} name="chevron-left"></FIcon>
            </TouchableOpacity>

            <Text
              style={{
                color: "#F34900",
                fontWeight: 600,
              }}
            >
              All Platforms
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.defButton]}>
              <SIcon color={"#F34900"} size={24} name="phone"></SIcon>
              <Text style={{ color: "#000", fontWeight: 600 }}>
                Login via Phone
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.defButton]}>
              <Icon color={"#F34900"} size={24} name="email"></Icon>
              <Text style={{ color: "#000", fontWeight: 600 }}>
                Login via Email
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.defButton]}>
              <EIcon
                color={"#00acee"}
                size={24}
                name="twitter-with-circle"
              ></EIcon>

              <Text style={{ color: "#000", fontWeight: 600 }}>
                Login Via Twitter
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.defButton]}>
              <EIcon
                color={"#3b5998"}
                size={24}
                name="facebook-with-circle"
              ></EIcon>
              <Text style={{ color: "#000", fontWeight: 600 }}>
                Login via Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.defButton]}>
              <FIcon size={24} name="apple"></FIcon>
              <Text style={{ color: "#000", fontWeight: 600 }}>
                Login via Apple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

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

          <TouchableOpacity style={[styles.defButton]}>
            <FIcon color={"#4285F4"} size={24} name="google"></FIcon>
            <Text style={{ color: "#000", fontWeight: 600 }}>
              Login via Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.defButton]}>
            <Text style={{ color: "#000", fontWeight: 600 }}>
              Continue without login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.defButton]}
            onPress={() => {
              setMoreToggle(true);
            }}
          >
            <FIcon color={"#F34900"} size={18} name="chevron-down"></FIcon>
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
  loginButton: {
    backgroundColor: "#F34900",
  },
  toggleHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    columnGap: 80,
  },
  toggleButton: {
    width: "10%",
    borderColor: "#EDEDED",
    borderRadius: 120,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
  },
  dontAcc: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    width: "100%",
  },
});
