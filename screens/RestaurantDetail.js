import { Image, View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../restaurantDetail/About";
import MenuItems from "../restaurantDetail/MenuItems";

const RestaurantDetail = ({ route }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetail;
