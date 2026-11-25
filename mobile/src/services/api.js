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