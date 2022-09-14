import { View, Text } from "react-native";

const OrderItem = ({ title, price }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ fontSize: 16, opacity: 0.7 }}>{price}</Text>
    </View>
  );
};

export default OrderItem;
