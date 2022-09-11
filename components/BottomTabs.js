import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <CIcons icon="home" title="Home" />
      <CIcons icon="search" title="Browse" />
      <CIcons icon="shopping-bag" title="Grocery" />
      <CIcons icon="receipt" title="Orders" />
      <CIcons icon="user" title="Account" />
    </View>
  );
};

const CIcons = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{ marginButton: 3, alignSelf: "center" }}
        />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;
