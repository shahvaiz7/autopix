import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import Reac,{useState, useEffect}  from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import * as OpenAnything from 'react-native-openanything';
//npm install react-native-openanything


export default function ShareApp({navigation}) {
  const [email, setEmail] = useState();
  return (
    <ScrollView style={styles.containerView}>
      <View style={styles.HeaderView}>
        <Text style={styles.AllText}>Share App  </Text>
        <Text style={{  color: "#ffffff" ,marginLeft:10}}>
          {" "}
          Email{" "}
        </Text>
      </View>
      <View style={styles.optionList}>
      
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={newtext => setEmail(newtext)}
          defaultValue={email}
        />
        <View style={styles.Bottom}>
           <Button label="Send" onPress={() => OpenAnything.Email(to = email, subject = "Install from here", body = "link###")} /> 
       </View>
      </View>
    </ScrollView>
  );
}
//Email(to = false, subject = false, body = false, cc = false, bcc = false)
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1D6167",
  },

  
  optionList: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.6,
    padding: 10,
   
  },
  
  AllText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    padding:10
  },
  Bottom:{
    padding:10,
    width:"80%",
  }
});
