import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function GuideScreen({navigation}) {
  return (
    <View style={styles.containerView}>
      <View style={styles.topBar}>
        
        <TouchableOpacity
          style={{
            borderColor: "#ffffff",
            borderWidth: 2,
            borderRadius: 10,
            height: 30,
            width: 200,
            alignItems: "center",
          }} onPress={() => navigation.navigate("GuideAdd")}
        >
          <Text style={{ color: "#ffffff",fontSize:16 }}>  <MaterialCommunityIcons
                  name="plus"
                  size={16}
                  color={"#ffffff"}
                /> Create Instruction </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.bodyContent}>
       <View style={styles.OrderCard}>
       <View style={styles.CardHead}>
        <Text style={styles.CardText}> Instruction #01</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Guidesteps")}>
              <Text style={styles.CardText}>
                Edit{" "}
                <MaterialCommunityIcons
                  name="archive-cog"
                  size={16}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
            </View> 
        <View style={styles.OrderBody}>
          <View style={{ flex: 0.5 }}>
            <Image
              style={{ width: 130, height: 120,borderRadius:25 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.5, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> Background : 05</Text>
            <Text style={styles.CardText}> Floor : 02 </Text>
            <Text style={styles.CardText}>Logo : Yes </Text>
            <Text style={styles.CardText}>License Plate : No</Text>
          </View>
         
        </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1D6167",
  },

  topBar: {
    flex: 0.1,
    flexDirection: "row",
    margin: 10,
    justifyContent: 'center',
  },
  CardHead:{
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-between",
    margin: 15,
  },
  bodyContent: {
    flex: 0.8,
  },
  OrderBody: {
    margin: 15,
    flexDirection: "row",
    justifyContent: 'space-around',
    backgroundColor: "#283F45",
    margin: 10,
    borderRadius: 25,
  },
  OrderCard:{
    backgroundColor: "#283F45",
    margin: 10,
    borderRadius: 25,
   

  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
