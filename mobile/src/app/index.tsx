import { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { connexion } from "../services/api";
import { useRouter } from 'expo-router';


export default function ConnexionScreen() {

  const [pseudo, setPseudo] = useState("")
  const [message, setMessage] = useState("")
  const [erreur, setErreur] = useState("")

  const router = useRouter();

  const validerPseudo = () => {
    if (pseudo.trim() === "") {
      setErreur("Veuillez entrer un pseudo");
      setMessage("");
    }
    else {
      setErreur("");
      connexion(pseudo);
      router.push("/accueil");
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text> Bienvenue dans le clavier d'or ! (mobile)</Text>

        <TextInput
          placeholder="Entrez votre pseudo"
          value={pseudo}
          onChangeText={setPseudo}
        />

        <Button
          title="Se connecter"
          onPress={validerPseudo}
        />

        <Text>{erreur}</Text>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}