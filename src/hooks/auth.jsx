import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api.js";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions/createSession", {
        email,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (err) {
      if (err.response) {
        console.log(err.response);
        alert(err.response.data.message);
      } else {
        alert("Não foi possível entrar");
        console.log(err);
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      api.put("/users/updateUser", user);

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil alterado com Sucesso");
    } catch (err) {
      if (err.response) {
        console.log(err.response);
        alert(err.response.data.message);
      } else {
        alert("Não foi possível entrar");
        console.log(err);
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
