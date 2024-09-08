// // // After Successful clone from Git hub just run :# npm install -i  to get all the node modules
// // // Bottom tab navigator#  npm install @react-navigation/bottom-tabs
// // // Import :::import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // //            const Tab = createBottomTabNavigator();


// // // git reset --hard :: if any local change happen and you forgot the and also undo the changes and pull the new changes from git 
// // // I uninstalled expo-font and used the command npx expo install expo-font to install expo-font and the issue disappeared
// // // Generate APK :  eas build --platform android --profile  preview 
// // // need to create eas.json 

// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyBJ1YWj3Emxbg4qNru7IiIuPlVBgIEhpSk",
// //   authDomain: "bcsflashcard-6efff.firebaseapp.com",
// //   databaseURL: "https://bcsflashcard-6efff-default-rtdb.firebaseio.com",
// //   projectId: "bcsflashcard-6efff",
// //   storageBucket: "bcsflashcard-6efff.appspot.com",
// //   messagingSenderId: "874377932216",
// //   appId: "1:874377932216:web:f06a384f44c7601a75f34d",
// //   measurementId: "G-5NR6ZEQWYC"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);



// // var admin = require("firebase-admin");

// // var serviceAccount = require("path/to/serviceAccountKey.json");

// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://bcsflashcard-6efff-default-rtdb.firebaseio.com"
// // });
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// //   StatusBar,
// //   ImageBackground

// // } from "react-native";
// // import React from "react";
// // import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// // import { LinearGradient } from 'expo-linear-gradient';
// // export default function OrderScreen({ navigation }) {
// //   return (
// //     <View style={styles.containerView}>

// //       {/* <LinearGradient
// //         // Background Linear Gradient
// //         colors={['#A52306', '#020202']}
// //         locations={[0.1, 0.3]}
// //         style={styles.containerView}
// //       > */}
// //       <ImageBackground source={require("../assets/background.png")} style={styles.containerView} >
// //         <View style={styles.topBar}>
// //           <View>
// //             <Text
// //               style={{
// //                 color: "#ffffff",
// //                 fontSize: 24,
// //                 fontWeight: "condensedBold",
// //               }}
// //             >
// //               {" "}
// //               Orders{" "}
// //             </Text>
// //           </View>
// //           <TouchableOpacity
// //             style={{
// //               borderColor: "#ffffff",
// //               borderWidth: 1,
// //               borderRadius: 35,
// //               height: 35,
// //               width: 120,
// //               alignItems: "center",
// //               justifyContent: 'center'
// //             }} onPress={() => navigation.navigate("CreateOrder")}
// //           >
// //             <Text style={{ color: "#ffffff" }}> Create Order </Text>
// //           </TouchableOpacity>
// //         </View>
// //         <ScrollView style={styles.bodyContent}>
// //           <View style={styles.OrderCard}>
// //             <View style={{ flex: 0.4 }}>
// //               <Image
// //                 style={{ width: 119, height: 124, borderRadius: 22 }}
// //                 source={require("../assets/Rectangle 17 (3).png")}
// //               />
// //             </View>
// //             <View style={{ flex: 0.4, flexDirection: 'row' }}>
// //               <View>
// //                 <Text style={styles.IDText}> #5625554 </Text>
// //                 <Text style={styles.ImageCount}> 5 Images </Text>
// //                 <View style={{ paddingTop: 45, paddingLeft: 10 }}>
// //                   <Text style={styles.DayCount}>2 Days ago </Text>
// //                 </View>
// //               </View>
// //               <View style={{ paddingTop: 20, paddingLeft: 45 }}>
// //                 <Text
// //                   style={{
// //                     color: "yellow",
// //                     fontSize: 14,
// //                     fontFamily: 'DMSans_500Medium',
// //                   }}
// //                 >
// //                   Pending{" "}
// //                 </Text>
// //               </View>

// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 justifyContent: 'flex-end',
// //                 paddingBottom: 20
// //               }}
// //             >

// //               <TouchableOpacity style={{
// //                 borderWidth: 1,
// //                 borderColor: 'gray',
// //                 borderRadius: 15,
// //                 width: 80,
// //                 height: 30,
// //                 alignContent: 'center',
// //                 alignItems: 'center',
// //                 justifyContent: 'center'
// //               }}>
// //                 <Text style={styles.CardText}>
// //                   Option{" "}
// //                   <MaterialCommunityIcons
// //                     name="ship-wheel"
// //                     size={14}
// //                     color={"#ffffff"}
// //                   />
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //           <View style={styles.OrderCard}>
// //             <View style={{ flex: 0.4 }}>
// //               <Image
// //                 style={{ width: 119, height: 124, borderRadius: 22 }}
// //                 source={require("../assets/Rectangle 17 (3).png")}
// //               />
// //             </View>
// //             <View style={{ flex: 0.4, flexDirection: 'row' }}>
// //               <View>
// //                 <Text style={styles.IDText}> #5625554 </Text>
// //                 <Text style={styles.ImageCount}> 5 Images </Text>
// //                 <View style={{ paddingTop: 45, paddingLeft: 10 }}>
// //                   <Text style={styles.DayCount}>2 Days ago </Text>
// //                 </View>
// //               </View>
// //               <View style={{ paddingTop: 20, paddingLeft: 45 }}>
// //                 <Text
// //                   style={{
// //                     color: "red",
// //                     fontSize: 14,
// //                     fontFamily: 'DMSans_500Medium',
// //                   }}
// //                 >
// //                   Cancel{" "}
// //                 </Text>
// //               </View>

// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 justifyContent: 'flex-end',
// //                 paddingBottom: 20
// //               }}
// //             >

// //               <TouchableOpacity style={{
// //                 borderWidth: 1,
// //                 borderColor: 'gray',
// //                 borderRadius: 15,
// //                 width: 80,
// //                 height: 30,
// //                 alignContent: 'center',
// //                 alignItems: 'center',
// //                 justifyContent: 'center'
// //               }}>
// //                 <Text style={styles.CardText}>
// //                   Option{" "}
// //                   <MaterialCommunityIcons
// //                     name="ship-wheel"
// //                     size={14}
// //                     color={"#ffffff"}
// //                   />
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //           <View style={styles.OrderCard}>
// //             <View style={{ flex: 0.4 }}>
// //               <Image
// //                 style={{ width: 119, height: 124, borderRadius: 22 }}
// //                 source={require("../assets/Rectangle 17 (3).png")}
// //               />
// //             </View>
// //             <View style={{ flex: 0.4, flexDirection: 'row' }}>
// //               <View>
// //                 <Text style={styles.IDText}> #5625554 </Text>
// //                 <Text style={styles.ImageCount}> 5 Images </Text>
// //                 <View style={{ paddingTop: 45, paddingLeft: 10 }}>
// //                   <Text style={styles.DayCount}>2 Days ago </Text>
// //                 </View>
// //               </View>
// //               <View style={{ paddingTop: 20, paddingLeft: 45 }}>
// //                 <Text
// //                   style={{
// //                     color: "#71F6B3",
// //                     fontSize: 14,
// //                     fontFamily: 'DMSans_500Medium',
// //                   }}
// //                 >
// //                   Approved{" "}
// //                 </Text>
// //               </View>

// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 justifyContent: 'flex-end',
// //                 paddingBottom: 20
// //               }}
// //             >

// //               <TouchableOpacity style={{
// //                 borderWidth: 1,
// //                 borderColor: 'gray',
// //                 borderRadius: 15,
// //                 width: 80,
// //                 height: 30,
// //                 alignContent: 'center',
// //                 alignItems: 'center',
// //                 justifyContent: 'center'
// //               }}>
// //                 <Text style={styles.CardText}>
// //                   Option{" "}
// //                   <MaterialCommunityIcons
// //                     name="ship-wheel"
// //                     size={14}
// //                     color={"#ffffff"}
// //                   />
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //           <View style={styles.OrderCard}>
// //             <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
// //               <View style={styles.OrderCardImage}>
// //                 <Image
// //                   style={{ width: 119, height: 153, borderRadius: 22 }}
// //                   source={require("../assets/Rectangle 17 (3).png")}
// //                 />
// //               </View>
// //               <View style={styles.OrderCardDetails}>

// //                 <View style={styles.OrderCardDetailsOne}>
// //                   <Text style={styles.IDText}> #5625554 </Text>
// //                 </View>
// //                 <View style={styles.OrderCardDetailsTwo}>
// //                   <TouchableOpacity style={{
// //                     borderWidth: 1,
// //                     borderColor: 'gray',
// //                     padding: 5,
// //                     borderRadius: 10
// //                   }}>
// //                     <Text style={styles.CardText2}>
// //                       BG{" "}
// //                       <MaterialCommunityIcons
// //                         name="check-circle"
// //                         size={12}
// //                         color={"red"}

// //                       />
// //                     </Text>
// //                   </TouchableOpacity>
// //                   <TouchableOpacity style={{
// //                     borderWidth: 1,
// //                     borderColor: 'gray',
// //                     padding: 5,
// //                     borderRadius: 15
// //                   }}>
// //                     <Text style={styles.CardText2}>
// //                       Floor{" "}
// //                       <MaterialCommunityIcons
// //                         name="bookmark-remove-outline"
// //                         size={12}
// //                         color={"red"}
// //                       />
// //                     </Text>
// //                   </TouchableOpacity>
// //                   <TouchableOpacity style={{
// //                     borderWidth: 1,
// //                     borderColor: 'gray',
// //                     padding: 5,
// //                     borderRadius: 15
// //                   }}>
// //                     <Text style={styles.CardText2}>
// //                       Logo{" "}
// //                       <MaterialCommunityIcons
// //                         name="check-circle"
// //                         size={12}
// //                         color={"red"}
// //                       />
// //                     </Text>
// //                   </TouchableOpacity>

// //                 </View>
// //                 <View style={styles.OrderCardDetailsThree}>
// //                   <TouchableOpacity style={{
// //                     borderWidth: 1,
// //                     borderColor: 'gray',
// //                     padding: 5,
// //                     borderRadius: 15
// //                   }}>
// //                     <Text style={styles.CardText2}>
// //                       Number Plate{" "}
// //                       <MaterialCommunityIcons
// //                         name="check-circle"
// //                         size={12}
// //                         color={"red"}
// //                       />
// //                     </Text>
// //                   </TouchableOpacity>
// //                 </View>
// //                 <View style={styles.OrderCardDetailsFour}>

// //                   <Text style={styles.CardText2}>2 Days ago </Text>
// //                   <TouchableOpacity style={{
// //                     borderWidth: 1,
// //                     borderColor: 'gray',
// //                     padding: 5,
// //                     borderRadius: 10
// //                   }}>
// //                     <Text style={styles.CardText}>
// //                       Edit{" "}
// //                       <MaterialCommunityIcons
// //                         name="pen"
// //                         size={14}
// //                         color={"#ffffff"}
// //                       />
// //                     </Text>
// //                   </TouchableOpacity>
// //                 </View>
// //               </View>

// //             </ImageBackground>
// //           </View>

// //           {/* <View style={styles.OrderCard}>
// //             <View style={{ flex: 0.4 }}>
// //               <Image
// //                 style={{ width: 119, height: 153, borderRadius: 22 }}
// //                 source={require("../assets/Rectangle 17 (3).png")}
// //               />
// //             </View>
// //             <View style={{ flex: 0.4, flexDirection: 'row' }}>
// //               <View style={{ margin: 10 }}>
// //                 <Text style={styles.IDText}> #5625554 </Text>
// //                 <Text style={styles.ImageCount}> 5 Images </Text>
// //                 <View style={{ paddingTop: 70, paddingLeft: 5 }}>
// //                   <Text style={styles.DayCount}>2 Days ago </Text>
// //                 </View>
// //               </View>
// //               <View style={{ padding: 30, }}>
// //                 <Text
// //                   style={{
// //                     color: "red",
// //                     fontSize: 14,
// //                     fontFamily: 'DMSans_500Medium',
// //                   }}
// //                 >
// //                   Cancel{" "}
// //                 </Text>
// //               </View>

// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 justifyContent: 'flex-end',
// //                 paddingBottom: 20
// //               }}
// //             >

// //               <TouchableOpacity style={{
// //                 borderWidth: 1,
// //                 borderColor: 'gray',
// //                 borderRadius: 15,
// //                 width: 80,
// //                 height: 30,
// //                 alignContent: 'center',
// //                 alignItems: 'center',
// //                 justifyContent: 'center'
// //               }}>
// //                 <Text style={styles.CardText}>
// //                   Option{" "}
// //                   <MaterialCommunityIcons
// //                     name="tools"
// //                     size={12}
// //                     color={"#ffffff"}
// //                   />
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //           <View style={styles.OrderCard}>
// //             <View style={{ flex: 0.4 }}>
// //               <Image
// //                 style={{ width: 119, height: 153, borderRadius: 22 }}
// //                 source={require("../assets/Rectangle 17 (3).png")}
// //               />
// //             </View>
// //             <View style={{ flex: 0.4, flexDirection: 'row' }}>
// //               <View style={{ margin: 10 }}>
// //                 <Text style={styles.IDText}> #5625554 </Text>
// //                 <Text style={styles.ImageCount}> 5 Images </Text>
// //                 <View style={{ paddingTop: 70, paddingLeft: 5 }}>
// //                   <Text style={styles.DayCount}>2 Days ago </Text>
// //                 </View>
// //               </View>
// //               <View style={{ padding: 25, }}>
// //                 <Text
// //                   style={{
// //                     color: "#71F6B3",
// //                     fontSize: 14,
// //                     fontFamily: 'DMSans_500Medium',
// //                   }}
// //                 >
// //                   Approved{" "}
// //                 </Text>
// //               </View>

// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 justifyContent: 'flex-end',
// //                 paddingBottom: 20
// //               }}
// //             >

// //               <TouchableOpacity style={{
// //                 borderWidth: 1,
// //                 borderColor: 'gray',
// //                 borderRadius: 15,
// //                 width: 80,
// //                 height: 30,
// //                 alignContent: 'center',
// //                 alignItems: 'center',
// //                 justifyContent: 'center'
// //               }}>
// //                 <Text style={styles.CardText}>
// //                   Option{" "}
// //                   <MaterialCommunityIcons
// //                     name="tools"
// //                     size={12}
// //                     color={"#ffffff"}
// //                   />
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View> */}
// //           <View style={styles.OrderCard}>
// //             <View style={{ flex: 0.4 }}>
// //               <Image
// //                 style={{ width: 119, height: 124, borderRadius: 22 }}
// //                 source={require("../assets/Rectangle 17 (3).png")}
// //               />
// //             </View>
// //             <View style={{ flex: 0.4, flexDirection: 'row' }}>
// //               <View>
// //                 <Text style={styles.IDText}> #5625554 </Text>
// //                 <Text style={styles.ImageCount}> 5 Images </Text>
// //                 <View style={{ paddingTop: 45, paddingLeft: 10 }}>
// //                   <Text style={styles.DayCount}>2 Days ago </Text>
// //                 </View>
// //               </View>
// //               <View style={{ paddingTop: 20, paddingLeft: 45 }}>
// //                 <Text
// //                   style={{
// //                     color: "yellow",
// //                     fontSize: 14,
// //                     fontFamily: 'DMSans_500Medium',
// //                   }}
// //                 >
// //                   Pending{" "}
// //                 </Text>
// //               </View>

// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 justifyContent: 'flex-end',
// //                 paddingBottom: 20
// //               }}
// //             >

// //               <TouchableOpacity style={{
// //                 borderWidth: 1,
// //                 borderColor: 'gray',
// //                 borderRadius: 15,
// //                 width: 80,
// //                 height: 30,
// //                 alignContent: 'center',
// //                 alignItems: 'center',
// //                 justifyContent: 'center'
// //               }}>
// //                 <Text style={styles.CardText}>
// //                   Option{" "}
// //                   <MaterialCommunityIcons
// //                     name="ship-wheel"
// //                     size={16}
// //                     color={"#ffffff"}
// //                   />
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </ScrollView>
// //       </ImageBackground>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   containerView: {
// //     flex: 1,
// //     justifyContent: "space-between",
// //     backgroundColor: "#020202",
// //     paddingBottom: 10
// //   },

// //   topBar: {
// //     flex: 0.1,
// //     flexDirection: "row",
// //     margin: 10,
// //     justifyContent: "space-between",
// //     paddingTop: 35
// //   },
// //   bodyContent: {
// //     flex: 0.8,

// //   },
// //   OrderCard: {
// //     flex: 1,
// //     margin: 10,
// //     flexDirection: "row",
// //     borderWidth: 1,
// //     borderColor: 'gray',
// //     padding: 2,
// //     borderRadius: 25,
// //   },
// //   imageBack: {

// //     flexDirection: "row",
// //     width: '100%',
// //     borderRadius: 25,
// //   },

// //   OrderCardImage: {
// //     flex: .40
// //   },
// //   OrderCardDetails: {
// //     flex: .60,
// //     paddingRight: 10,

// //     paddingTop: 8

// //   },
// //   OrderCardDetailsTwo: {
// //     flexDirection: 'row',
// //     padding: 5,
// //     justifyContent: 'space-around'
// //   },
// //   OrderCardDetailsThree: {
// //     justifyContent: 'center',
// //     alignContent: 'center',
// //     width: '60%',

// //     alignItems: 'center'
// //   },
// //   OrderCardDetailsFour: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingLeft: 10,
// //     paddingTop: 20
// //   },
// //   IDText: {
// //     color: "#ffffff",
// //     fontSize: 16,
// //     fontFamily: 'DMSans_500Medium',
// //     paddingLeft: 4
// //   },
// //   ImageCount: {
// //     color: "#ffffff",
// //     fontSize: 14,
// //     fontFamily: 'DMSans_400Regular',
// //     paddingLeft: 4

// //   },
// //   DayCount: {
// //     color: "#ffffff",
// //     fontSize: 12,
// //     fontFamily: 'DMSans_400Regular',

// //   },

// //   CardHead: {
// //     color: "#ffffff",
// //     fontStyle: "italic",
// //     fontWeight: "bold",
// //     fontSize: 18
// //   },
// //   CardText: {
// //     color: "#ffffff",
// //     fontSize: 14,
// //     fontFamily: 'DMSans_400Regular',
// //   },
// //   CardText2: {
// //     color: "#ffffff",
// //     fontSize: 12,
// //     fontFamily: 'DMSans_400Regular',
// //   },
// // });
// // // After Successful clone from Git hub just run :# npm install -i  to get all the node modules
// // // Bottom tab navigator#  npm install @react-navigation/bottom-tabs
// // // Import :::import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // //            const Tab = createBottomTabNavigator();


// // // git reset --hard :: if any local change happen and you forgot the and also undo the changes and pull the new changes from git 
// // // I uninstalled expo-font and used the command npx expo install expo-font to install expo-font and the issue disappeared
// // // Generate APK :  eas build --platform android --profile  preview 
// // // need to create eas.json 


// //shoot screen copy 
// import {
//     StyleSheet,
//     Text,
//     View,
//     ScrollView,
//     TouchableOpacity,
//     Image,
//     Alert,
//     ImageBackground
//   } from "react-native";
//   import React, { useState, useEffect } from "react";
//   import * as ImagePicker from "expo-image-picker";
  
//   import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//   import { LinearGradient } from 'expo-linear-gradient';
  
//   export default function OrderList({ navigation }) {
//     const [image, setImage] = useState(null);
//     const [camera, setCamera] = useState(null);
  
  
//     // const verifyPermissions = async()=> {
//     //   const access =(Permissions.CAMERA);
//     //   if (access.status !== 'granted'){
//     //     Alert.alert(
//     //       'Insufficient Permission',
//     //        'Need to grant camera app permission',
//     //        [{text:'OK'}]
//     //        );
//     //     return false;
//     //   }
//     //   return true;
//     // };
  
  
//     const takeImageHandler = async () => {
//       // const hasPermission = await verifyPermissions();
//       // if(!hasPermission){
//       //   return;
//       // }
  
//       //ImagePicker.PermissionStatus.GRANTED;
//       const cameraphoto = await ImagePicker.launchCameraAsync(
//         {
//           mediaTypes: ImagePicker.MediaTypeOptions.All,
//           allowsMultipleSelection: true,
//           allowsEditing: true,
  
//         }
//       );
//       if (!cameraphoto.canceled) {
//         setImage(cameraphoto.assets[0].uri);
//       }
  
//     };
  
  
//     const pickImage = async () => {
//       // No permissions request is necessary for launching the image library
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         // allowsEditing: true,
//         allowsMultipleSelection: true,
//         // cameraType: CameraType.back,
//         aspect: [4, 3],
//         quality: 1,
//         orderedSelection: true,
  
//         // mediaTypes:ImagePicker.MediaTypeOptions.Images,
//       });
  
//       console.log(result);
  
//       if (!result.canceled) {
//         setImage(result.assets[0].uri);
//       }
//     };
  
//     return (
//       <View style={styles.containerView}>
//         <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
//           <ScrollView>
//             {/* <LinearGradient
//             // Background Linear Gradient
//             colors={['#A52306', '#020202']}
//             locations={[0.1, 0.3]}
//             style={styles.containerView}
//           > */}
//             <View style={styles.topBar}>
//               <View style={styles.ProfileDetails}>
//                 <Image
//                   style={{ width: 40, height: 40, borderRadius: 50 }}
//                   source={require("../assets/logoblack.jpeg")}
//                 />
//                 <View>
//                   <Text style={{
//                     fontSize: 12,
//                     color: '#ffffff'
//                   }}> Welcome back, </Text>
//                   <Text style={{
//                     fontSize: 16,
//                     color: '#ffffff',
//                     fontWeight: 'bold'
//                   }}> Mr. Rahim </Text>
//                 </View>
  
//               </View>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons name="bell" size={20} color={"#ffffff"} />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.bodyContent}>
  
  
  
//               {/* <ImageBackground source={require("../assets/cardback.png")} resizeMode='cover' > */}
//               <TouchableOpacity style={styles.blockContent} onPress={takeImageHandler} >
//                 <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
//                   <View style={{
//                     paddingTop: 40
//                   }}>
//                     <Image
//                       style={{ width: 110, height: 130, borderRadius: 25 }}
//                       source={require("../assets/camera.png")}
//                     />
//                   </View>
//                   <View
//                     style={{
//                       width: "100%",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <Text style={{
//                       color: 'white',
//                       fontSize: 20,
//                       margin: 10
//                     }}> Shoot </Text>
//                   </View>
//                 </ImageBackground>
//               </TouchableOpacity>
//               {/* </ImageBackground> */}
  
//               <TouchableOpacity style={styles.blockContent} onPress={pickImage}>
//                 <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
//                   <View style={{
//                     paddingTop: 40
//                   }}>
//                     <Image
//                       style={{ width: 120, height: 100, borderRadius: 25 }}
//                       source={require("../assets/upload.png")}
//                     />
//                   </View>
//                   <View
//                     style={{
//                       width: "100%",
//                       justifyContent: "flex-start",
//                     }}
//                   >
//                     <Text style={{
//                       color: 'white',
//                       fontSize: 20,
//                       margin: 10
//                     }}> Upload </Text>
//                   </View>
//                 </ImageBackground>
//               </TouchableOpacity>
//               {image && <TouchableOpacity style={styles.blockContent}  >
//                 <Image source={{ uri: image }} style={styles.image} />
  
//               </TouchableOpacity>}
//               {/* <Button label="Shoot" />
    
//             <Button label="Upload" onPress={pickImage} /> */}
//             </View>
//             {/* <View style={styles.OrderCard}>
//             <View style={{ flex: 0.4 }}>
//               <Image
//                 style={{ width: 130, height: 120, borderRadius: 35 }}
//                 source={require("../assets/logoblack.jpeg")}
//               />
//             </View>
//             <View
//               style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
//             >
//               <Text style={styles.CardText}> #5625554 </Text>
//               <Text style={styles.CardText}> 5 Images </Text>
//               <Text style={styles.CardText}>2 Days ago </Text>
//             </View>
//             <View
//               style={{
//                 flex: 0.3,
//                 alignContent: "center",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   color: "red",
//                   fontSize: 14,
//                   marginBottom: 16,
//                   fontWeight: "bold",
//                 }}
//               >
//                 Cancel{" "}
//               </Text>
//               <TouchableOpacity>
//                 <Text style={styles.CardText}>
//                   Option{" "}
//                   <MaterialCommunityIcons
//                     name="tools"
//                     size={12}
//                     color={"#ffffff"}
//                   />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.OrderCard}>
//             <View style={{ flex: 0.4 }}>
//               <Image
//                 style={{ width: 130, height: 120, borderRadius: 35 }}
//                 source={require("../assets/logoblack.jpeg")}
//               />
//             </View>
//             <View
//               style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
//             >
//               <Text style={styles.CardText}> #5625554 </Text>
//               <Text style={styles.CardText}> 5 Images </Text>
//               <Text style={styles.CardText}>2 Days ago </Text>
//             </View>
//             <View
//               style={{
//                 flex: 0.3,
//                 alignContent: "center",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   color: "#0FE7A5",
//                   fontSize: 12,
//                   marginBottom: 16,
//                   fontWeight: "bold",
//                 }}
//               >
//                 Approved{" "}
//               </Text>
//               <TouchableOpacity>
//                 <Text style={styles.CardText}>
//                   Option{" "}
//                   <MaterialCommunityIcons
//                     name="tools"
//                     size={12}
//                     color={"#ffffff"}
//                   />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.OrderCard}>
//             <View style={{ flex: 0.4 }}>
//               <Image
//                 style={{ width: 130, height: 120, borderRadius: 25, margin: 5 }}
//                 source={require("../assets/logoblack.jpeg")}
//               />
//             </View>
//             <View
//               style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
//             >
//               <Text style={styles.CardText}> #5625554 </Text>
//               <Text style={styles.CardText}> 5 Images </Text>
//               <Text style={styles.CardText}>2 Days ago </Text>
//             </View>
//             <View
//               style={{
//                 flex: 0.3,
//                 alignContent: "center",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   color: "#0FE7A5",
//                   fontSize: 12,
//                   marginBottom: 16,
//                   fontWeight: "bold",
//                 }}
//               >
//                 Approved{" "}
//               </Text>
//               <TouchableOpacity>
//                 <Text style={styles.CardText}>
//                   Option{" "}
//                   <MaterialCommunityIcons
//                     name="tools"
//                     size={12}
//                     color={"#ffffff"}
//                   />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.OrderCard}>
//             <View style={{ flex: 0.4 }}>
//               <Image
//                 style={{ width: 130, height: 120, borderRadius: 35 }}
//                 source={require("../assets/logoblack.jpeg")}
//               />
//             </View>
//             <View
//               style={{ flex: 0.3, justifyContent: "space-between", margin: 20 }}
//             >
//               <Text style={styles.CardText}> #5625554 </Text>
//               <Text style={styles.CardText}>
//                 {" "}
//                 {"\t"} {"\t"}
//                 {"\t"}
//                 {"\t"}5 Images{" "}
//               </Text>
//               <Text style={styles.CardText}>2 Days ago </Text>
//             </View>
//             <View
//               style={{
//                 flex: 0.3,
//                 alignContent: "center",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   color: "#0FE7A5",
//                   fontSize: 12,
//                   marginBottom: 16,
//                   fontWeight: "bold",
//                 }}
//               >
//                 Approved{" "}
//               </Text>
//               <TouchableOpacity>
//                 <Text style={styles.CardText}>
//                   Option{" "}
//                   <MaterialCommunityIcons
//                     name="tools"
//                     size={12}
//                     color={"#ffffff"}
//                   />
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View> */}
//           </ScrollView>
//         </ImageBackground>
//       </View>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     containerView: {
//       flex: 1,
//       justifyContent: "space-between",
//       backgroundColor: "#020202",
  
//     },
//     image: {
//       height: 220,
//       width: '100%',
//       resizeMode: 'stretch',
//       borderRadius: 25
//     },
//     topBar: {
//       flex: 0.1,
//       flexDirection: "row",
//       margin: 10,
//       justifyContent: "space-between",
//       paddingTop: 30
//     },
//     ProfileDetails: {
//       flexDirection: 'row'
  
//     },
//     bodyContent: {
//       flex: 1,
//       alignItems: "center",
//       margin: 10
//     },
//     blockContent: {
//       flex: .2,
//       borderWidth: 1,
//       borderColor: 'gray',
//       width: '100%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 25,
//       margin: 10
//     },
//     imageBack: {
//       flex: .2,
//       width: '100%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 25,
  
  
  
//     }
//   });
  