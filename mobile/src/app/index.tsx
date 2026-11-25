import { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { connexion } from "../services/api";
import { Link, useRouter } from 'expo-router';


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

        const response = await connexion(pseudo);

        setPseudo("");
        router.push("/accueil");

    } catch (error) {
        setErreur("Erreur lors de la connexion");
        console.error(error);
    }
};

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

        <Link href="/inscription">
          <Text>Pas de compte ? Inscrivez vous</Text>
        </Link>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}