import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AccueilScreen() {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>Page d'accueil</Text>
        </SafeAreaView>
    </SafeAreaProvider>

  );
}

