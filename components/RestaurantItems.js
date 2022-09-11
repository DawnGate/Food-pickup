import { Image, Text, TouchableOpacity, View } from "react-native";
import MatericalCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantItems = ({ navigation, ...props }) => {
  return (
    <>
      {props.restaurantData.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            style={{ marginBottom: 30 }}
            onPress={() => {
              navigation.navigate("RestaurantDetail", {
                name: item.name,
                image: item.image_url,
                price: item.price,
                reviews: item.reviews,
                rating: item.rating,
                categories: item.categories,
              });
            }}
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <RestaurantImage image={item.image_url} />
              <RestaurantInfo name={item.name} rating={item.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      ></Image>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MatericalCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-40 min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;
