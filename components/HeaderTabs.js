import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        backgroundColor: props.activeTab === props.title ? "black" : "white",
      }}
      onPress={() => {
        props.setActiveTab(props.title);
      }}
    >
      <Text
        style={{
          color: props.activeTab === props.title ? "white" : "black",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;
