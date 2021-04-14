import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.itemDataSlotOne}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title} </Text>
      </View>
      <View style={styles.itemDataSlotTwo}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    width: "100%",
  },
  itemDataSlotOne: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    width: "50%",
  },
  itemDataSlotTwo: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  quantity: {
    fontFamily: "open-sans",
    color: "#888",
    fontSize: 16,
  },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default CartItem;
