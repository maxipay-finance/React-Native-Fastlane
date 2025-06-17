import { Text, View } from "react-native";
import { GIT_COMMIT } from "./src/constants/git";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Last Commit: {GIT_COMMIT}</Text>
    </View>
  );
}
