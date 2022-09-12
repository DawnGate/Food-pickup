import { Image, View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../restaurantDetail/About";
import MenuItems from "../restaurantDetail/MenuItems";
import ViewCart from "../restaurantDetail/ViewCart";
import { foods } from "../data/fake_data";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems foods={foods} restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;
