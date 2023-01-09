import { Text, View } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View className="border-4 border-yellow p-4 my-4 rounded-xl justify-center items-center">
      <Text className="text-3xl font-bold text-yellow font-[open-sans-bold]">
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;
