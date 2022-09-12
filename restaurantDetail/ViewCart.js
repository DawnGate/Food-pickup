import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const ViewCart = (props) => {
  const cartItems = useSelector((state) => state.cart.itemsSelected);
  const totalValue = cartItems
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = totalValue.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        flexDirection: "row",
        bottom: 180,
        zIndex: 999,
      }}
    >
      {totalValue ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              width: 300,
              position: "relative",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
              View Cart:
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ViewCart;
