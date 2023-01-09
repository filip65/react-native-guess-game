import { Pressable, Text, View } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <View className="m-1">
      <Pressable
        onPress={() => onPress?.()}
        className="bg-[#72063c] rounded-full px-4 py-3 shadow-2x active:opacity-75"
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
