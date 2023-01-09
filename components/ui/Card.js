import { View } from "react-native";

const Card = ({ children, className }) => {
  return (
    <View
      className={`bg-primary rounded shadow-xl p-3 items-center ${className}`}
    >
      {children}
    </View>
  );
};

export default Card;
