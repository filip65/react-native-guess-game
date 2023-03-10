import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [gameNumber, setGameNumber] = useState(4);
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const restartGame = () => {
    setGameNumber(null);
    setGameOver(false);
    setRounds(0);
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient className="flex-1" colors={["#4e0329", "#ddb52f"]}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMethod="cover"
          className="flex-1"
          imageStyle={{
            opacity: 0.15,
          }}
        >
          <SafeAreaView className="flex-1">
            {!gameNumber ? (
              <StartGameScreen setNumber={setGameNumber} />
            ) : !gameOver ? (
              <GameScreen
                selectedNumber={gameNumber}
                setGameOver={setGameOver}
                setRounds={setRounds}
              />
            ) : (
              <GameOverScreen
                restartGame={restartGame}
                guessNumber={gameNumber}
                roundsNumber={rounds}
              />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
