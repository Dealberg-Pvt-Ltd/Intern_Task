import React,{ createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();
export const LoginContex = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function useLoginContext() {
  return useContext(LoginContex);
}

const ContextWrapper = ({ children }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    title: "",
    description: "",
    image: "",
  });

  const addProduct = (item) => {
    setProduct({ ...item });
  };

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  const [credentials, setCredentials] = useState(() => {
    const storedCredentials = localStorage.getItem("credentials");
    return storedCredentials ? JSON.parse(storedCredentials) : { email: null, otp: null };
  });
  

  const storeCreds = (creds) => {
    setCredentials({ ...creds });
    localStorage.setItem("credentials", JSON.stringify(creds));
  };
  

  const userLogout = () => {
    setCredentials({
      email: "",
      otp: "",
    });
  };

  return (
    <AppContext.Provider value={{ product, addProduct }}>
      <LoginContex.Provider value={{ credentials, storeCreds, userLogout }}>
        {children}
      </LoginContex.Provider>
    </AppContext.Provider>
  );
};

export default ContextWrapper;
