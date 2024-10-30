// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGXMQBVGR8KATEe1VvSNhuM24JsKVemQQ",
  authDomain: "netfrixo.firebaseapp.com",
  projectId: "netfrixo",
  storageBucket: "netfrixo.firebasestorage.app",
  messagingSenderId: "446030344338",
  appId: "1:446030344338:web:224b2cfff293fb0b01f64b",
  measurementId: "G-WP6M3N9H5R"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
