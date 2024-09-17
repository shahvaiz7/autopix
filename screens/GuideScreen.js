import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
  FlatList

} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GuideCard from "../component/GuideCard";

const guideDetails = [
  { 
    id: 1,
    image: require('../assets/Rectangle 17 (3).png'),
    orderId: 1009001,
    BGCheck: 'check-circle',
    NPCheck:'bookmark-remove-outline',
    FloorCheck:'check-circle',
    LogoCheck:'bookmark-remove-outline',
    createdOn: 3,
    orderStatus: 'Pending',
  },
  { 
    id: 2,
    image: require('../assets/Rectangle 17 (3).png'),
    orderId: 1009001,
    BGCheck: 'check-circle',
    NPCheck:'bookmark-remove-outline',
    FloorCheck:'check-circle',
    LogoCheck:'bookmark-remove-outline',
    createdOn: 3,
    orderStatus: 'Pending',
  },
  { 
    id: 3,
    image: require('../assets/Rectangle 17 (3).png'),
    orderId: 1009001,
    BGCheck: 'check-circle',
    NPCheck:'bookmark-remove-outline',
    FloorCheck:'check-circle',
    LogoCheck:'bookmark-remove-outline',
    createdOn: 3,
    orderStatus: 'Pending',
  },
  { 
    id: 4,
    image: require('../assets/Rectangle 17 (3).png'),
    orderId: 1009001,
    BGCheck: 'check-circle',
    NPCheck:'bookmark-remove-outline',
    FloorCheck:'check-circle',
    LogoCheck:'bookmark-remove-outline',
    createdOn: 3,
    orderStatus: 'Pending',
  },

];


export default function GuideScreen({ navigation }) {
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
              justifyContent: 'center'
            }} onPress={() => navigation.navigate("GuideAdd")}
          >
            <Text style={{ color: "#ffffff" }}> Create Instruction </Text>
          </TouchableOpacity>
        </View>
       
        
        <FlatList 
        style={styles.bodyContent}
        data={guideDetails}
        renderItem={({ item }) => (
          <TouchableOpacity   onPress={() => navigation.navigate("CreateOrder")}>
          <GuideCard image={item.image} guideId={item.id} BGCheck={item.BGCheck}
                      NPCheck={item.NPCheck} FloorCheck={item.FloorCheck} LogoCheck={item.LogoCheck} createdOn={item.createdOn} />
                       </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />  
     

        {/* <View style={styles.GuideCard}>
            <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
              <View style={styles.OrderCardImage}>
                <Image
                  style={{ width: 119, height: 153, borderRadius: 22 }}
                  source={require("../assets/Rectangle 17 (3).png")}
                />
              </View>
              <View style={styles.OrderCardDetails}>
                <Text style={styles.CardHead}> #5625554 </Text>
               <View style={styles.OrderCardDetailsTwo}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      BG{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}

                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Floor{" "}
                      <MaterialCommunityIcons
                        name="bookmark-remove-outline"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Logo{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>

                </View>
                <View style={styles.OrderCardDetailsThree}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Number Plate{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.OrderCardDetailsFour}>

                  <Text style={styles.CardText}>2 Days ago </Text>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      Edit{" "}
                      <MaterialCommunityIcons
                        name="pen"
                        size={14}
                        color={"#ffffff"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </ImageBackground>
          </View>
          <View style={styles.GuideCard}>
            <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
              <View style={styles.OrderCardImage}>
                <Image
                  style={{ width: 119, height: 153, borderRadius: 22 }}
                  source={require("../assets/Rectangle 17 (3).png")}
                />
              </View>
              <View style={styles.OrderCardDetails}>

                <View style={styles.OrderCardDetailsOne}>
                  <Text style={styles.CardHead}> #5625554 </Text>
                </View>
                <View style={styles.OrderCardDetailsTwo}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      BG{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}

                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Floor{" "}
                      <MaterialCommunityIcons
                        name="bookmark-remove-outline"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Logo{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>

                </View>
                <View style={styles.OrderCardDetailsThree}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Number Plate{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.OrderCardDetailsFour}>

                  <Text style={styles.CardText}>2 Days ago </Text>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      Edit{" "}
                      <MaterialCommunityIcons
                        name="pen"
                        size={14}
                        color={"#ffffff"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </ImageBackground>
          </View>
          <View style={styles.GuideCard}>
            <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
              <View style={styles.OrderCardImage}>
                <Image
                  style={{ width: 119, height: 153, borderRadius: 22 }}
                  source={require("../assets/Rectangle 17 (3).png")}
                />
              </View>
              <View style={styles.OrderCardDetails}>

                <View style={styles.OrderCardDetailsOne}>
                  <Text style={styles.CardHead}> #5625554 </Text>
                </View>
                <View style={styles.OrderCardDetailsTwo}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      BG{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}

                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Floor{" "}
                      <MaterialCommunityIcons
                        name="bookmark-remove-outline"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Logo{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>

                </View>
                <View style={styles.OrderCardDetailsThree}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Number Plate{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.OrderCardDetailsFour}>

                  <Text style={styles.CardText}>2 Days ago </Text>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      Edit{" "}
                      <MaterialCommunityIcons
                        name="pen"
                        size={14}
                        color={"#ffffff"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </ImageBackground>
          </View>
          <View style={styles.GuideCard}>
            <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
              <View style={styles.OrderCardImage}>
                <Image
                  style={{ width: 119, height: 153, borderRadius: 22 }}
                  source={require("../assets/Rectangle 17 (3).png")}
                />
              </View>
              <View style={styles.OrderCardDetails}>

                <View style={styles.OrderCardDetailsOne}>
                  <Text style={styles.CardHead}> #5625554 </Text>
                </View>
                <View style={styles.OrderCardDetailsTwo}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      BG{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}

                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Floor{" "}
                      <MaterialCommunityIcons
                        name="bookmark-remove-outline"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Logo{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>

                </View>
                <View style={styles.OrderCardDetailsThree}>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 15
                  }}>
                    <Text style={styles.CardText}>
                      Number Plate{" "}
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={12}
                        color={"red"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.OrderCardDetailsFour}>

                  <Text style={styles.CardText}>2 Days ago </Text>
                  <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 5,
                    borderRadius: 10
                  }}>
                    <Text style={styles.CardText}>
                      Edit{" "}
                      <MaterialCommunityIcons
                        name="pen"
                        size={14}
                        color={"#ffffff"}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </ImageBackground>
          </View> */}

       
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
    paddingTop: 40
  },
  bodyContent: {
    flex: 0.8,

  },
  GuideCard: {
    margin: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: 'gray',
    padding: 2,
    borderRadius: 25,
  },
  imageBack: {

    flexDirection: "row",
    width: '100%',
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
    paddingTop: 10
  },

  CardHead: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18
  },
  CardText: {
    color: "#ffffff",

    fontWeight: "bold",
    fontSize: 12
  },
});
