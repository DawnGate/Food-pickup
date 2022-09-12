import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../store/cart/cartSlice";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: { fontSize: 19, fontWeight: "600" },
});

const MenuItems = (props) => {
  const dispath = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsSelected);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.foods.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckBox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                innerIconStyle={{ borderRadius: 0, borderColor: "lightgray" }}
                fillColor="green"
                isChecked={Boolean(
                  cartItems.find((i) => i.title === item.title)
                )}
                onPress={() => {
                  dispath(
                    changeCart({
                      item: item,
                      name: props.restaurantName,
                    })
                  );
                }}
              />
              <FoodInfo
                title={item.title}
                description={item.description}
                price={item.price}
              />
              <FoodImage image={item.image} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const FoodInfo = (props) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text>{props.description}</Text>
      <Text>{props.price}</Text>
    </View>
  );
};

const FoodImage = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};

export default MenuItems;
