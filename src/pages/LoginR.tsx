import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage
} from "@ionic/react";
import "./LoginR.css";


const LoginR: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    // Aqui você implementaria a lógica de login,
    // como enviar os dados para um servidor.
    console.log("E-mail:", email);
    console.log("Senha:", password);

    // Simulando uma chamada ao backend
    try {
      const response = await fakeBackendLogin(email, password); // Chamada ao backend
      if (response.success) {
        // Redireciona para a próxima página se o login for bem-sucedido
        history.push('/HomeR'); // Substitua '/HomeR' pelo caminho da sua próxima tela
      } else {
        alert("Login falhou: " + response.message);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
  };

  // Função simulada para o backend
  const fakeBackendLogin = (email: string, password: string) => {
    return new Promise<{ success: boolean; message?: string }>((resolve) => {
      setTimeout(() => {
        // Simulando um login bem-sucedido
        if (email === "teste@123" && password === "123") {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: "Credenciais inválidas." });
        }
      }, 2000); // Simula um atraso de 2 segundos
    });
  };
  return (
    <IonPage>
      <IonContent>
        <div className="background">
          {/* Círculos decorativos */}
          <div className="circle circle-1-top-small"></div>
          <div className="circle circle-2-top"></div>
          <div className="circle circle-3-bottom"></div>
          <div className="circle circle-4-bottom-small"></div>
          <div className="circle circle-5-bottom-medium"></div>

          <div className="container">
          <div className="logo-container">
              <img src="../public/minden.svg" alt="Logo Icon" className="logo" />
            </div>
            <h2>Login</h2>
            <form
              className="test"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="inptGroup">
                <label className="inptLabel">E-mail</label>
                <input
                  placeholder="Insira seu E-mail"
                  className="inpt"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inptGroup">
                <label className="inptLabel">Senha</label>
                <input
                  placeholder="Insira sua senha"
                  className="inpt"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="buttonLogin">
                Login
              </button>
            </form>
              <p>Esqueci minha senha</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginR;
