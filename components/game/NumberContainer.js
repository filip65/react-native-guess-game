import { Dimensions, Text, View } from "react-native";

const NumberContainer = ({ children }) => {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <View
      className={`border-4 border-yellow my-4 rounded-xl justify-center items-center ${
        deviceWidth < 380 ? "p-2" : "p-4"
      }`}
    >
      <Text className="text-3xl font-bold text-yellow font-[open-sans-bold]">
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;
