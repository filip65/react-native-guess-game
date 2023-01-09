import { Text, View } from "react-native";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View className="flex-row justify-between bg-yellow border-2 border-primary rounded-full px-4 py-3 mb-4 items-center shadow-md">
      <Text className="font-[open-sans-bold] text-lg">#{roundNumber}</Text>
      <Text className="font-[open-sans]">Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;
