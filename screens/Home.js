import { SafeAreaView, ScrollView, View } from "react-native";
import Catergories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import { Divider } from "react-native-elements";

import { localRestaurants } from "../data/fake_data";
import { useEffect, useState } from "react";
import BottomTabs from "../components/BottomTabs";

const Home = ({ navigation }) => {
  console.log(navigation);
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("NY");
  const [activeTab, setActiveTab] = useState("Delivery");
  useEffect(() => {
    setRestaurantData(
      localRestaurants.filter((item) => item.type.includes(activeTab))
    );
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catergories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
