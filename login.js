import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Tenta fazer o login com email e senha
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // Redireciona o usuário para a página após o login bem-sucedido
        window.location.href = "index.html";
    } catch (error) {
        // Exibe uma mensagem de erro caso o login falhe
        console.error("Erro ao fazer login:", error.message);
        alert("Erro ao fazer login: " + error.message);
    }
}

// Expõe a função login para ser usada no HTML
window.login = login;
