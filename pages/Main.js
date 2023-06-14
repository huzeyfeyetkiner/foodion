import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={[styles.headText]}>foodion</Text>
        <MIcon
          style={{ marginLeft: "auto" }}
          color={"#F34900"}
          size={18}
          name="line-scan"
        ></MIcon>
      </View>

      <TouchableOpacity style={styles.title}>
        <Text style={styles.titleText}>Big Food day Only step..</Text>

        <Image
          style={styles.titleImg}
          source={require("../assets/image5.png")}
        ></Image>
      </TouchableOpacity>

      <View style={styles.aiCards}>
        <TouchableOpacity style={styles.aiCard}>
          <Image
            style={styles.aiImg}
            source={require("../assets/image3.png")}
          ></Image>

          <Text style={styles.aiText}>COOK AI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiCard}>
          <Image
            style={styles.aiImg}
            source={require("../assets/image4.png")}
          ></Image>

          <Text style={styles.aiText}>DIETICIAN AI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#F34900",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  headText: {
    fontSize: 24,
    fontWeight: 700,
    color: "#F34900",
    marginLeft: "auto",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  title: {
    backgroundColor: "#ED7020",
    borderRadius: 30,
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    paddingHorizontal: 5,
  },
  titleText: {
    lineHeight: 35,
    fontSize: 24,
    color: "#fff",
    fontWeight: 700,
    width: "50%",
  },
  titleImg: {
    width: "50%",
    resizeMode: "contain",
  },
  aiCards: {
    display: "flex",
    flexDirection: "row",
    columnGap: 2,
    height: "25%",
    marginTop: 10,
  },
  aiCard: {
    backgroundColor: "aqua",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "45%",
    borderRadius: 30,
  },
  aiImg: {
    width: "40%",
    resizeMode: "contain",
  },
  aiText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 16,
    width: "100%",
    alignSelf: "stretch",
  },
});
