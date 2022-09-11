import { View, Text, Image } from "react-native";

const About = (props) => {
  console.log(props.route);
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formatCatergories = categories.join(" - ");
  const descriptionDetail = `${formatCatergories} ${
    price ? " - " + price : ""
  } - rating: ${rating}* - rating: ${reviews}`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={descriptionDetail} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    ></Image>
  );
};

const RestaurantTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15,
      }}
    >
      {props.description}
    </Text>
  );
};

export default About;
