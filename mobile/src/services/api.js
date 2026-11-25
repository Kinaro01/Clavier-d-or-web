// Adresse du backend Go
const API_URL = "http://localhost:8080";

// fonction générique qui sert de base pour les autres appels
async function apiRequest(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        header: {
            "Content-Type": "application/json",
            ...options.header
        }, 
        ...options
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue");
    }

    return data
}

// Connexion
export async function connexion(pseudo) {
    return apiRequest("/api/connexion", {
        method: "POST",
        body: JSON.stringify({
            pseudo: pseudo
        })
    })
}

// Inscription
export async function incription(pseudo) {
    return apiRequest("/api/inscription", {
        method: "POST",
        body: JSON.stringify({
            pseudo: pseudo
        })
    })
}

// Score total
export async function scoreTotal(idParam) {
    return apiRequest(
        `/api/scoretotal?id_sauvegarde=${encodeURIComponent(idParam)}`
    );
}

// Afficher Thèmes
export async function afficherTheme(idParam) {
    return apiRequest(
        `/api/affichertheme?id_sauvegarde=${encodeURIComponent(idParam)}`
    );
}

// Score du thème
export async function scoreTheme(idParam, idThemeParam) {
    return apiRequest(
        `/api/scoretheme?id_sauvegarde=${encodeURIComponent(idParam)}&id_theme=${encodeURIComponent(idThemeParam)}`
    );
}

// Afficher question
export async function afficherQuestion(idParam, idThemeParam) {
    return apiRequest(
        `/api/afficherquestion?id_sauvegarde=${encodeURIComponent(idParam)}&id_theme=${encodeURIComponent(idThemeParam)}`
    );
}

// Vérifier réponse
export async function verifierQuestion(idSauvegarde, idTheme, choixReponse) {
    return apiRequest(
        `/api/verifierquestion?id_sauvegarde=${encodeURIComponent(idSauvegarde)}&id_theme=${encodeURIComponent(idTheme)}`,
        {
            method: "PUT",
            body: JSON.stringify({
                choix_reponse: choixReponse
            })
        }
    );
}

// Vérifier réponse
export async function recommencerTheme(idSauvegarde, idTheme) {
    return apiRequest("/api/recommencertheme", {
        method: "PUT",
        body: JSON.stringify({
            id_sauvegarde: Number(idSauvegarde),
            id_theme: Number(idTheme)
        })
    });
}


// Export PDF
export async function afficherQuestion(idParam, idThemeParam) {
    return apiRequest(
        `/api/exportpdf?id_sauvegarde=${encodeURIComponent(idParam)}&id_theme=${encodeURIComponent(idThemeParam)}`
    );
}
