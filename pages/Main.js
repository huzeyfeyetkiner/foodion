import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

import EIcon from "react-native-vector-icons/Entypo";
import FeIcon from "react-native-vector-icons/Feather";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

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
          onPress={() => {
            navigation.navigate("Camera");
          }}
        ></MIcon>
      </View>

      <TouchableOpacity
        style={styles.title}
        onPress={() => {
          navigation.navigate("Camera");
        }}
      >
        <Text style={styles.titleText}>Big Food day Only step..</Text>

        <Image
          style={styles.titleImg}
          source={require("../assets/image5.png")}
        ></Image>
      </TouchableOpacity>

      <View style={styles.aiCards}>
        <LinearGradient
          style={styles.aiCard}
          colors={["#7ABDE5", "#EBF8FF"]}
          start={{ x: 0.4, y: 0.5 }}
          end={{ x: 0, y: 0 }}
        >
          <Image
            style={styles.aiImg}
            source={require("../assets/image3.png")}
          ></Image>

          <Text style={styles.aiText}>COOK AI</Text>
        </LinearGradient>

        <LinearGradient
          style={[
            styles.aiCard,
            {
              backgroundColor: "#7ABDE5",
            },
          ]}
          colors={["#5FA172", "#E5FEE8"]}
          start={{ x: 0.4, y: 0.5 }}
          end={{ x: 0, y: 0 }}
        >
          <Image
            style={styles.aiImg}
            source={require("../assets/image4.png")}
          ></Image>

          <Text style={styles.aiText}>COOK AI</Text>
        </LinearGradient>
      </View>

      <View style={styles.recContainer}>
        <View style={styles.recHeader}>
          <Text style={styles.recHText}>Recommendeds</Text>

          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.recText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recList}>
          <TouchableOpacity style={styles.recCard}>
            <Image
              style={styles.recImg}
              source={require("../assets/image6.png")}
            ></Image>
            <Text style={styles.rCardText}>
              Alberta’s Wrap with Sushi Neo..
            </Text>

            <View style={styles.rBottom}>
              <EIcon color={"#ED7020"} size={24} name="star"></EIcon>
              <Text style={{ color: "#ED7020", fontWeight: 500 }}>4.7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recCard}>
            <Image
              style={styles.recImg}
              source={require("../assets/image7.png")}
            ></Image>
            <Text style={styles.rCardText}>
              Alberta’s Wrap with Sushi Neo..
            </Text>

            <View style={styles.rBottom}>
              <EIcon color={"#ED7020"} size={24} name="star"></EIcon>
              <Text style={{ color: "#ED7020", fontWeight: 500 }}>4.7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recCard}>
            <Image
              style={styles.recImg}
              source={require("../assets/image8.png")}
            ></Image>
            <Text style={styles.rCardText}>
              Alberta’s Wrap with Sushi Neo..
            </Text>

            <View style={styles.rBottom}>
              <EIcon color={"#ED7020"} size={24} name="star"></EIcon>
              <Text style={{ color: "#ED7020", fontWeight: 500 }}>4.7</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomMenu}>
          <TouchableOpacity>
            <FeIcon color={"#ED7020"} size={24} name="home"></FeIcon>
          </TouchableOpacity>

          <TouchableOpacity>
            <MCIcon color={"#D0CFD5"} size={24} name="file-cabinet"></MCIcon>
          </TouchableOpacity>

          <TouchableOpacity>
            <MCIcon color={"#ED7020"} size={24} name="basket"></MCIcon>
          </TouchableOpacity>

          <TouchableOpacity>
            <FeIcon color={"#D0CFD5"} size={24} name="gift"></FeIcon>
          </TouchableOpacity>

          <TouchableOpacity>
            <FeIcon color={"#D0CFD5"} size={24} name="user"></FeIcon>
          </TouchableOpacity>
        </View>
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
    fontSize: 22,
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
    marginBottom: -10,
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
    alignItems: "center",
    justifyContent: "center",
    height: "23%",
    columnGap: 2,
    marginTop: 1,
    marginBottom: -10,
  },
  aiCard: {
    backgroundColor: "aqua",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80%",
    width: "45%",
    borderRadius: 30,
    padding: 5,
  },
  aiImg: {
    width: "40%",
    height: "60%",
    resizeMode: "contain",
  },
  aiText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
    height: "20%",
  },
  recContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },
  recHText: {
    fontWeight: 600,
    color: "#4C4765",
    fontSize: 18,
  },
  recText: {
    color: "#ED7020",
    fontSize: 14,
    fontWeight: 600,
  },
  recHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  recList: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
  },
  recCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  recImg: {
    borderRadius: 15,
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },
  rCardText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#4C4765",
    width: "100%",
  },
  rBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
  },
  bottomMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 34,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
