import { StyleSheet, Text, View, Image, TouchableOpacity ,ScrollView} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function OrderScreen() {
  return (
    <View style={styles.containerView}>
      <View style={styles.topBar}>
        <View>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 24,
              marginBottom: 16,
              fontWeight: 'condensedBold',
            }}
          >
            {" "}
            Orders{" "}
          </Text>
        </View>
        <TouchableOpacity>
          <Text  style={{ color:"#ffffff" }}> Create Order </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.bodyContent}>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 25,margin:5 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 20 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> {"\t"} {"\t"}{"\t"}{"\t"}5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
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
    backgroundColor:'#1D6167'
  },

  topBar: {
    flex: 0.1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  bodyContent: {
    flex: 0.8,
  },
  OrderCard: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
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
