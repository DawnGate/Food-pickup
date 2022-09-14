import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Lottie from "lottie-react-native";
import MenuItems from "../restaurantDetail/MenuItems";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState();
  const orders = useSelector((state) => state.ordered.orders);
  console.log(orders);

  useEffect(() => {
    setLastOrder(orders[0]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {lastOrder && lastOrder?.itemsSelected && (
        <View
          style={{
            margin: 15,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Lottie
            style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/check-mark.json")}
            autoPlay={true}
            speed={0.5}
            loop={false}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Your order at {lastOrder?.restaurantName} has ordered successful.
          </Text>
          <ScrollView>
            <MenuItems
              foods={lastOrder?.itemsSelected}
              hideCheckBox={true}
              restaurantName={lastOrder?.restaurantName}
            />
            <Lottie
              style={{ height: 200, alignSelf: "center" }}
              source={require("../assets/animations/cooking.json")}
              autoPlay={true}
              speed={0.5}
            />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default OrderCompleted;
