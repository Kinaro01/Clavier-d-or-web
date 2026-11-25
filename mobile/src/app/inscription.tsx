import { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { inscription } from "../services/api";
import { useRouter } from 'expo-router';


export default function ConnexionScreen() {

  const [pseudo, setPseudo] = useState("")
  const [message, setMessage] = useState("")
  const [erreur, setErreur] = useState("")

  const router = useRouter();

  const validerPseudo = async () => {
    if (pseudo.trim() === "") {
        setErreur("Veuillez entrer un pseudo");
        return;
    }

    try {
        setErreur("");

        const response = await inscription(pseudo);

        setPseudo("");
        router.push("/accueil");

    } catch (error) {
        setErreur("Erreur lors de l'inscription");
        console.error(error);
    }
};

  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <TextInput
          placeholder="Entrez votre pseudo"
          value={pseudo}
          onChangeText={setPseudo}
        />

        <Button
          title="S'inscrire"
          onPress={validerPseudo}
        />

        <Text>{erreur}</Text>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}