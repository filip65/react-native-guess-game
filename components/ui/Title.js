import { Text, View } from "react-native";

const Title = ({ text, classNameView, classNameText }) => {
  return (
    <View className={`border-2 border-white p-2 ${classNameView}`}>
      <Text
        className={`text-2xl text-center font-[open-sans-bold] text-white ${classNameText}`}
      >
        {text}
      </Text>
    </View>
  );
};

export default Title;
