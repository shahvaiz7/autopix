import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
    image: require('../assets/background1.png'),
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
            }} onPress={() => navigation.navigate("CreateOrder")}
          >
            <Text style={{ color: "#ffffff" }}> Create Order </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.bodyContent}>
          <View style={styles.OrderCard}>
            <View style={{ flex: 0.4 }}>
              <Image
                style={{ width: 119, height: 124, borderRadius: 22 }}
                source={require("../assets/Rectangle 17 (3).png")}
              />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
              <View>
                <Text style={styles.IDText}> #5625554 </Text>
                <Text style={styles.ImageCount}> 5 Images </Text>
                <View style={{ paddingTop: 45, paddingLeft: 10 }}>
                  <Text style={styles.DayCount}>2 Days ago </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 0.3,
                justifyContent: 'flex-end',
                paddingBottom: 20
              }}
            >
              <View style={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 40
              }}>
                <Text
                  style={{
                    color: "yellow",
                    fontSize: 14,
                    fontFamily: 'DMSans_500Medium',
                  }}
                >
                  Pending{" "}
                </Text>
              </View>

              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 15,
                width: 80,
                height: 30,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={styles.CardText}>
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
          <View style={styles.OrderCard}>
            <View style={{ flex: 0.4 }}>
              <Image
                style={{ width: 119, height: 124, borderRadius: 22 }}
                source={require("../assets/Rectangle 17 (3).png")}
              />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
              <View>
                <Text style={styles.IDText}> #5625554 </Text>
                <Text style={styles.ImageCount}> 5 Images </Text>
                <View style={{ paddingTop: 45, paddingLeft: 10 }}>
                  <Text style={styles.DayCount}>2 Days ago </Text>
                </View>
              </View>
              <View style={{ paddingTop: 20, paddingLeft: 45 }}>
                <Text
                  style={{
                    color: "red",
                    fontSize: 14,
                    fontFamily: 'DMSans_500Medium',
                  }}
                >
                  Cancel{" "}
                </Text>
              </View>

            </View>

            <View
              style={{
                flex: 0.3,
                justifyContent: 'flex-end',
                paddingBottom: 20
              }}
            >

              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 15,
                width: 80,
                height: 30,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={styles.CardText}>
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
          <View style={styles.OrderCard}>
            <View style={{ flex: 0.4 }}>
              <Image
                style={{ width: 119, height: 124, borderRadius: 22 }}
                source={require("../assets/Rectangle 17 (3).png")}
              />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
              <View>
                <Text style={styles.IDText}> #5625554 </Text>
                <Text style={styles.ImageCount}> 5 Images </Text>
                <View style={{ paddingTop: 45, paddingLeft: 10 }}>
                  <Text style={styles.DayCount}>2 Days ago </Text>
                </View>
              </View>
              <View style={{ paddingTop: 20, paddingLeft: 45 }}>
                <Text
                  style={{
                    color: "#71F6B3",
                    fontSize: 14,
                    fontFamily: 'DMSans_500Medium',
                  }}
                >
                  Approved{" "}
                </Text>
              </View>

            </View>

            <View
              style={{
                flex: 0.3,
                justifyContent: 'flex-end',
                paddingBottom: 20
              }}
            >

              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 15,
                width: 80,
                height: 30,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={styles.CardText}>
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
          <View style={styles.OrderCard}>
            <View style={{ flex: 0.4 }}>
              <Image
                style={{ width: 119, height: 124, borderRadius: 22 }}
                source={require("../assets/Rectangle 17 (3).png")}
              />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
              <View>
                <Text style={styles.IDText}> #5625554 </Text>
                <Text style={styles.ImageCount}> 5 Images </Text>
                <View style={{ paddingTop: 45, paddingLeft: 10 }}>
                  <Text style={styles.DayCount}>2 Days ago </Text>
                </View>
              </View>
              <View style={{ paddingTop: 20, paddingLeft: 45 }}>
                <Text
                  style={{
                    color: "yellow",
                    fontSize: 14,
                    fontFamily: 'DMSans_500Medium',
                  }}
                >
                  Pending{" "}
                </Text>
              </View>

            </View>

            <View
              style={{
                flex: 0.3,
                justifyContent: 'flex-end',
                paddingBottom: 20
              }}
            >

              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 15,
                width: 80,
                height: 30,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={styles.CardText}>
                  Option{" "}
                  <MaterialCommunityIcons
                    name="ship-wheel"
                    size={16}
                    color={"#ffffff"}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
