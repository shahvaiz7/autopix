import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,

} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OrderCard from "../component/OrderCard";
const orderDetails = [
  {
    id: 1,
    image: require('../assets/background1.png'),
    orderId: 1009001,
    imageCount: 5,
    dayCount: 3,
    orderStatus: 'Pending',
  },
  {
    id: 2,
    image: require('../assets/background2.png'),
    orderId: 1009002,
    imageCount: 3,
    dayCount: 4,
    orderStatus: 'Approved',
  },
  {
    id: 3,
    image: require('../assets/background3.png'),
    orderId: 1009002,
    imageCount: 3,
    dayCount: 4,
    orderStatus: 'Approved',
  },
  {
    id: 4,
    image: require('../assets/floor1.png'),
    orderId: 1009002,
    imageCount: 3,
    dayCount: 4,
    orderStatus: 'Approved',
  },
  {
    id: 5,
    image: require('../assets/background2.png'),
    orderId: 1009002,
    imageCount: 3,
    dayCount: 4,
    orderStatus: 'Approved',
  },
  {
    id: 6,
    image: require('../assets/background3.png'),
    orderId: 1009002,
    imageCount: 3,
    dayCount: 4,
    orderStatus: 'Approved',
  },
  // ... more items with image, orderId, imageCount, dayCount, orderStatus, onPress 
];
export default function OrderScreen({ navigation }) {
  return (
    <View style={styles.containerView}>
      <ImageBackground source={require("../assets/background.png")} style={styles.containerView} >
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
              Orders{" "}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: "#ffffff",
              borderWidth: 1,
              borderRadius: 35,
              height: 35,
              width: 120,
              alignItems: "center",
              justifyContent: 'center'
            }} onPress={() => navigation.navigate("Shoot")}
          >
            <Text style={{ color: "#ffffff" }}> Create Order </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.bodyContent}
          data={orderDetails}
          renderItem={({ item }) => (
            <OrderCard image={item.image} orderId={item.id} orderStatus={item.orderStatus} imageCount={item.imageCount} dayCount={item.dayCount} />
          )}
          keyExtractor={item => item.id}
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
    paddingBottom: 10
  },

  topBar: {
    flex: 0.07,
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between",
    paddingTop: 35
  },
  bodyContent: {
    flex: 0.8,

  },
  OrderCard: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: 'gray',
    padding: 2,
    borderRadius: 25,
  },

  OrderCardImage: {
    flex: .40
  },
  OrderCardDetails: {
    flex: .60,
    paddingRight: 10,

    paddingTop: 8

  },
  OrderCardDetailsTwo: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around'
  },
  OrderCardDetailsThree: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '60%',

    alignItems: 'center'
  },
  OrderCardDetailsFour: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 20
  },
  IDText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: 'DMSans_500Medium',
    paddingLeft: 4
  },
  ImageCount: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
    paddingLeft: 4

  },
  DayCount: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: 'DMSans_400Regular',

  },

  CardHead: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18
  },
  CardText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
  },
  CardText2: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: 'DMSans_400Regular',
  },
});
