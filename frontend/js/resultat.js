const idSauvegarde = sessionStorage.getItem("id_sauvegarde");

const theme = JSON.parse(sessionStorage.getItem("theme_selectionne"));
const idTheme = theme.id;

async function afficherScoreTheme() {
    try {
        const idSauvegarde = sessionStorage.getItem("id_sauvegarde");

        const theme = JSON.parse(sessionStorage.getItem("theme_selectionne"));

        const idTheme = theme.id;

        if (!idSauvegarde || !idTheme) {
            console.error("Aucune sauvegarde trouvée.");
            return;
        }

        const response = await fetch(`/api/scoretheme?id_sauvegarde=${encodeURIComponent(idSauvegarde)}&id_theme=${encodeURIComponent(idTheme)}`);

        if (!response.ok) {
            const erreur = await response.text();
            console.error("Erreur HTTP :", response.status, erreur);
            return;
        }

        const data = await response.json();

        document.getElementById("ScoreTheme").textContent = data.score_theme;

    } catch (error) {
        console.error(error);
    }
}

afficherScoreTheme();

const boutonRecomencer = document.getElementById("btn_recommencer")

boutonRecomencer.addEventListener("click", async () => {
    try {
        const response = await fetch("/api/recommencertheme", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // stringify = conversion de javascript a json
            body: JSON.stringify({
                id_sauvegarde: Number(idSauvegarde),
                id_theme: Number(idTheme)
            })
        });
        if (!response.ok) {
            throw new Error("Erreur lors de la réinitialisation du thème");
        }

        window.location.href = "/question"
    } catch (error) {
        console.error(error)
    }
});


// retour au menu
const boutonMenu = document.getElementById("btn_menu")

boutonMenu.addEventListener("click", () => {
    window.location.href = "/accueil"
});

