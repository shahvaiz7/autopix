import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';

export default function AccountSetting({ navigation }) {
  return (
    <View style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
      <View style={styles.HeaderView}>
        <Text style={styles.AllText}> Account Settings </Text>
        <Text
          style={{ color: "#C0CACB", fontSize: 14, fontWeight: "semibold" }}
        >
          {" "}
          Select your customized setting{" "}
        </Text>
      </View>
      <View style={styles.optionList}>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate("#")}
        >
          <Text style={styles.CardText}>Notification </Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={18}
            color={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate("AccountSetting")}
        >
          <Text style={styles.CardText}>Privacy Setting</Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={18}
            color={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate("Shareapp")}
        >
          <Text style={styles.CardText}>Permissions</Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={18}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex:1,
    justifyContent:'flex-start' ,
    
  },
  
  HeaderView: {
    flex: 0.1,
    width: "100%",
    padding:10
   
  },
  
  optionList: {
    alignContent: "center",
    alignItems: "center",
    justifyContent:'center',
    margin:10,
    flex: 0.25,
    borderRadius:10,
    borderWidth:2,
    borderColor:'gray',
    paddingBottom:20
    
    
  },
  options: {
    margin: 5,
    padding: 12,
    paddingBottom:10,
    borderRadius: 10,
  
    color: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderBottomColor:'gray',
    borderBottomWidth:.10,
    width:'100%',
   
  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 14,
  },
  AllText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
