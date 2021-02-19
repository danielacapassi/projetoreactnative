import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Produtos from "../screens/Produtos";
import Home from "../screens/Home";

const Rotas = {
  Login: {
    nome: "Login",
    screen: Login,
  },
  Produtos: {
    nome: "Produtos",
    screen: Produtos,
  },
  Home: {
    nome: "Home",
    screen: Home,
  },
};
// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);
