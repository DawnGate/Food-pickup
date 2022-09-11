import { Image, ScrollView, Text, View } from "react-native";

const Catergories = () => {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      title: "Pick-up",
    },
    {
      image: require("../assets/images/bread.png"),
      title: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      title: "Fast foods",
    },
    {
      image: require("../assets/images/deals.png"),
      title: "Deals",
    },
    {
      image: require("../assets/images/coffee.png"),
      title: "Coffee & Tea",
    },
    {
      image: require("../assets/images/desserts.png"),
      title: "Desserts",
    },
  ];
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            style={{
              marginRight: 30,
              alignItems: "center",
              // justifyContent: "center",
            }}
            key={index}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 13, fontWeight: "900" }}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Catergories;
