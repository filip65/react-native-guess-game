import { Alert, FlatList, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let min = 1;
let max = 100;

const GameScreen = ({ selectedNumber, setGameOver, setRounds }) => {
  const initialGuess = generateRandomBetween(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  const generateNextNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("Don't lie!!!", "You know that it's invalid move...", [
        { text: "Sorry" },
      ]);
      return;
    }

    if (direction === "lower") {
      max = currentGuess;
    }

    if (direction === "greater") {
      min = currentGuess + 1;
    }

    const guess = generateRandomBetween(min, max);

    setGuessRounds((prev) => [guess, ...prev]);

    if (guess === selectedNumber) {
      setCurrentGuess(guess);
      Alert.alert("Congratulation!", "You won the game!", [
        { text: "Nice!", onPress: () => setGameOver(true) },
      ]);
      setRounds(guessRounds.length + 1);
      return;
    }

    setCurrentGuess(guess);
  };

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  return (
    <View className="flex-1 p-4 landscape:flex-row">
      <View className="landscape:flex-1">
        <Title text="Opponent's Guess" />
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View className="landscape:w-6"></View>
      <View className="landscape:flex-1">
        <Card className="space-y-2 landscape:hidden">
          <Text className="text-xl text-yellow font-[open-sans]">
            Higher or lower?
          </Text>
          <View className="flex-row">
            <View className="flex-1">
              <Button onPress={() => generateNextNumber("lower")}>
                <Ionicons name="md-remove" color="white" size={24} />
              </Button>
            </View>
            <View className="flex-1">
              <Button onPress={() => generateNextNumber("greater")}>
                <Ionicons name="md-add" color="white" size={24} />
              </Button>
            </View>
          </View>
        </Card>
        <FlatList
          className="mt-6"
          data={guessRounds}
          renderItem={(item) => (
            <GuessLogItem
              guess={item.item}
              roundNumber={guessRounds.length - item.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;
