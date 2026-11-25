import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Connexion"
                }}
            />

            <Stack.Screen
                name="accueil"
                options={{
                    title: "Accueil"
                }}
            />

            <Stack.Screen
                name="inscription"
                options={{
                    title: "Inscription"
                }}
            />

            <Stack.Screen
                name="question"
                options={{
                    title: "Jeu"
                }}
            />

            <Stack.Screen
                name="resultat"
                options={{
                    title: "Résultat"
                }}
            />
        </Stack>
    );
}