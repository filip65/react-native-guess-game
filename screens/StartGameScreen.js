import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../components/ui/Button";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const StartGameScreen = ({ setNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const clearInput = () => setEnteredNumber("");

  const confirmInputHandler = () => {
    if (!enteredNumber) return;
    const number = parseInt(enteredNumber);

    if (!number) {
      Alert.alert("Error", "Input must be number!!", [
        { text: "Yeah 🙄", onPress: clearInput },
      ]);
    }

    if (number <= 0) {
      Alert.alert("Error", "Input must be positive number!!", [
        { text: "Yeah", onPress: clearInput },
      ]);
    }

    setNumber(number);
  };

  return (
    <ScrollView className="flex-1">
      <KeyboardAvoidingView
        className="p-4 flex-1 items-center"
        behavior="position"
      >
        <Title text="Guess My Number" classNameView="px-6 mb-8" />
        <Card>
          <Text className="text-yellow text-xl font-[open-sans]">
            Enter a number
          </Text>
          <TextInput
            className="text-2xl h-[50] w-[45] text-center border-b border-yellow text-yellow my-2"
            maxLength={2}
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={setEnteredNumber}
          />
          <View className="flex-row justify-center">
            <View className="flex-1">
              <Button onPress={clearInput}>Reset</Button>
            </View>
            <View className="flex-1">
              <Button onPress={confirmInputHandler}>Confirm</Button>
            </View>
          </View>
        </Card>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
