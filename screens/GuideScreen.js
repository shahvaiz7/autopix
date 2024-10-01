import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import GuideCard from "../component/GuideCard";
import UserContext from "../auth/UserContext";
import BaseUrl from "../auth/BaseUrl";
import axios from "axios";

const guideDetails = [
  {
    guideId: 1,
    image: require("../assets/Rectangle 17 (3).png"),
    orderId: 1009001,
    BGCheck: "check-circle",
    NPCheck: "bookmark-remove-outline",
    FloorCheck: "check-circle",
    LogoCheck: "bookmark-remove-outline",
    createdOn: 3,
    orderStatus: "Pending",
  },
  {
    guideId: 2,
    image: require("../assets/Rectangle 17 (3).png"),
    orderId: 1009001,
    BGCheck: "check-circle",
    NPCheck: "bookmark-remove-outline",
    FloorCheck: "check-circle",
    LogoCheck: "bookmark-remove-outline",
    createdOn: 3,
    orderStatus: "Pending",
  },
  {
    guideId: 3,
    image: require("../assets/Rectangle 17 (3).png"),
    orderId: 1009001,
    BGCheck: "check-circle",
    NPCheck: "bookmark-remove-outline",
    FloorCheck: "check-circle",
    LogoCheck: "bookmark-remove-outline",
    createdOn: 3,
    orderStatus: "Pending",
  },
  {
    guideId: 4,
    image: require("../assets/Rectangle 17 (3).png"),
    orderId: 1009001,
    BGCheck: "check-circle",
    NPCheck: "bookmark-remove-outline",
    FloorCheck: "check-circle",
    LogoCheck: "bookmark-remove-outline",
    createdOn: 3,
    orderStatus: "Pending",
  },
];

export default function GuideScreen({ navigation }) {
  const [instructions, setInstructions] = useState([]);
  const { userData,setInstruction } = useContext(UserContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/orders/`, {
          headers: {
            Authorization: `token ${userData?.token}`, // Pass the token here
            "Content-Type": "application/json",
          },
        });
        setInstructions(response.data);
      } catch (err) {
        alert(err.message); // Catch and display error if any
        console.log(err); // Catch and display error if any
      }
    };

    fetchOrders();
  }, []);

  return (
    <View style={styles.containerView}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.containerView}
      >
        <View style={styles.topBar}>
          <View>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "condensedBold",
              }}
            >
              {" "}
              Instruction{" "}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: "#ffffff",
              borderWidth: 1,
              borderRadius: 35,
              height: 35,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("GuideAdd")}
          >
            <Text style={{ color: "#ffffff" }}> Create Instruction </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.bodyContent}
          data={instructions}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setInstruction(item), navigation.navigate("CreateOrder");
              }}
            >
              <GuideCard
                image={item.instruction_id?.background?.image}
                guideId={item.id}
                BGCheck={item.BGCheck}
                NPCheck={item.NPCheck}
                FloorCheck={item.FloorCheck}
                LogoCheck={item.LogoCheck}
                createdOn={item.createdOn}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#020202",
  },

  topBar: {
    flex: 0.07,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    paddingTop: 40,
  },
  bodyContent: {
    flex: 0.8,
  },
  GuideCard: {
    margin: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    padding: 2,
    borderRadius: 25,
  },
  imageBack: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 25,
  },

  OrderCardImage: {
    flex: 0.4,
  },
  OrderCardDetails: {
    flex: 0.6,
    paddingRight: 10,

    paddingTop: 8,
  },
  OrderCardDetailsTwo: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
  },
  OrderCardDetailsThree: {
    justifyContent: "center",
    alignContent: "center",
    width: "60%",

    alignItems: "center",
  },
  OrderCardDetailsFour: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
  },

  CardHead: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18,
  },
  CardText: {
    color: "#ffffff",

    fontWeight: "bold",
    fontSize: 12,
  },
});
