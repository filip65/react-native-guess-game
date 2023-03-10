import { Image, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

const GameOverScreen = ({ restartGame, roundsNumber, guessNumber }) => {
  const { height, width } = useWindowDimensions();

  const imageSize = (height < 500 ? 0.4 : 1) * (width < 380 ? 150 : 300);

  return (
    <View className="flex-1 px-4 items-center justify-center">
      <Title text="GAME OVER" classNameView="px-6" />
      <View
        className={`border-2 border-primary w-[${imageSize}] h-[${imageSize}] rounded-full overflow-hidden mt-4`}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      >
        <Image
          source={require("../assets/images/success.png")}
          className="w-full h-full"
        />
      </View>
      <Text className="text-2xl landscape:text-lg text-center my-4">
        Your phone needed
        <HightLight> {roundsNumber} </HightLight>
        rounds to guess the number
        <HightLight> {guessNumber}</HightLight>
      </Text>
      <Button className="capitalize" onPress={restartGame}>
        Start New Game
      </Button>
    </View>
  );
};

const HightLight = ({ children }) => (
  <Text className="font-bold text-primary">{children}</Text>
);

export default GameOverScreen;
