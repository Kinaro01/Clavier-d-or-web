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

  const Valider = () => {
    if (pseudo.trim() === "") {
      setErreur("Veuillez entrer un pseudo");
      setMessage("")
    }
    else {
      setMessage("Bonjour " + pseudo)
      setErreur("")
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text> Bienvenue dans le clavier d'or ! (mobile)</Text>

        <Text> Connexion</Text>

        <TextInput
          placeholder="Entrez votre pseudo"
          value={pseudo}
          onChangeText={setPseudo}
        />

        <Button
          title="Se connecter"
          onPress={() => router.push("/accueil")}
        />

        <Text>{message}</Text>
        <Text>{erreur}</Text>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}