import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserContext from "../auth/UserContext";
import BaseUrl from "../auth/BaseUrl";
import axios from "axios";

export default function OrderCard({
  image,
  orderId,
  imageCount,
  dayCount,
  orderStatus,
  onPress,
}) {
  let statusColor;

  if (orderStatus == "Approved") {
    statusColor = "#0CFFB3";
  } else if (orderStatus == "Pending") {
    statusColor = "#FFCA0C";
  } else if (orderStatus == "Cancel") {
    statusColor = "#FC381E";
  } else if (orderStatus == "In Progress") {
    statusColor = "#D0F0C0";
  } else if (orderStatus == "Archive") {
    statusColor = "gray";
  } else {
    statusColor = "white";
  }
  const { userData } = useContext(UserContext);
  const [Img, setImg] = useState("");

  useEffect(() => {
    {
      orderId &&
        axios
          .get(`${BaseUrl}/order-upload/${orderId}/files/`, {
            headers: {
              Authorization: `token ${userData?.token}`, // Pass the token here
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setImg(response.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }, [orderId]);

  return (
    <View style={styles.OrderCard}>
      <View style={{ flex: 0.4 }}>
        <ScrollView style={styles.imageList} horizontal={true}>
          <Image source={{ uri: Img?.file }} style={styles.imageList} />
        </ScrollView>
      </View>
      <View style={{ flex: 0.4, flexDirection: "row" }}>
        <View>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "DMSans_500Medium",
              paddingLeft: 4,
            }}
          >
            {" "}
            # {orderId}
          </Text>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "DMSans_400Regular",
              paddingLeft: 4,
            }}
          >
            {" "}
            {imageCount} Images{" "}
          </Text>
          <View style={{ paddingTop: 45, paddingLeft: 10 }}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 12,
                fontFamily: "DMSans_400Regular",
              }}
            >
              {dayCount} Days ago{" "}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{ flex: 0.3, justifyContent: "flex-end", paddingBottom: 20 }}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 40,
          }}
        >
          <Text
            style={{
              color: statusColor,
              fontSize: 14,
              fontFamily: "DMSans_500Medium",
            }}
          >
            {orderStatus}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 15,
            width: 80,
            height: 30,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontFamily: "DMSans_400Regular",
            }}
          >
            Option{" "}
            <MaterialCommunityIcons
              name="ship-wheel"
              size={14}
              color={"#ffffff"}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderCard: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    padding: 2,
    borderRadius: 25,
  },
  imageList: {
    width: 119,
    height: 124,
    borderRadius: 22,
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
    paddingTop: 20,
  },
  IDText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "DMSans_500Medium",
    paddingLeft: 4,
  },
  ImageCount: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    paddingLeft: 4,
  },
  DayCount: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
  },

  CardHead: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18,
  },
  CardText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
  },
  CardText2: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
  },
});
