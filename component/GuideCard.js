import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from 'axios';
import UserContext from "../auth/UserContext";
import BaseUrl from "../auth/BaseUrl";

export default function GuideCard({BgId,  guideId, BGCheck, NPCheck, FloorCheck, LogoCheck, createdOn, onPress }) {
  const { userData } = useContext(UserContext);
  const [img,setImg] = useState()
 
 useEffect(() => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/backgrounds/${BgId}`,
    headers: { 
      "Authorization": `Token ${userData?.token}`, // Pass the token here
      'Cookie': 'csrftoken=NJChvjOxebFsuddDFi8waFmFFeWWLsBm; sessionid=pewl7aqbu7dwierg2uy7yipixdz05r7s'
    }
  };
  
  axios.request(config)
  .then((response) => {
    setImg(response.data);
  })
  .catch((error) => {
    console.log('backgrounds',error);
  }); 
 }, [])

 
  return (
    <View style={styles.GuideCard}>
      <View style={styles.OrderCardImage}>
        <Image
          style={{ width: 119, height: 153, borderRadius: 22 }}
          source={{ uri: img?.image }}
        />
      </View>
      <View style={styles.OrderCardDetails}>
        <Text style={styles.CardHead}>  # {guideId} </Text>
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
                //name="check-circle"
                name={BGCheck}
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
                //name="bookmark-remove-outline"
                name={FloorCheck}
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
                // name="check-circle"
                name={LogoCheck}
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
                // name="check-circle"
                name={NPCheck}
                size={12}
                color={"red"}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.OrderCardDetailsFour}>

          <Text style={styles.CardText}>{createdOn?.split('T')[0]} Days ago </Text>
          <TouchableOpacity style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 5,
            borderRadius: 10
          }} onPress={onPress} >
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

    </View>

  )
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
    paddingTop: 30
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