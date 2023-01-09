import { Image, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

const GameOverScreen = ({ restartGame, roundsNumber, guessNumber }) => {
  return (
    <View className="flex-1 px-4 items-center justify-center">
      <Title text="GAME OVER" classNameView="px-6" />
      <View className="border-2 border-yellow w-64 h-64 rounded-full overflow-hidden mt-4">
        <Image
          source={require("../assets/images/success.png")}
          className="w-full h-full"
        />
      </View>
      <Text className="text-2xl text-center my-4">
        Your phone needed
        <Text className="font-bold text-primary"> {roundsNumber} </Text>
        rounds to guess the number
        <Text className="font-bold text-primary"> {guessNumber}</Text>
      </Text>
      <Button className="capitalize" onPress={restartGame}>
        Start New Game
      </Button>
    </View>
  );
};

export default GameOverScreen;