import React from "react";
import { ScrollView, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import geladeira1 from "../../../assets/geladeira1.jpeg";
import geladeira2 from "../../../assets/geladeira2.jpeg";
import geladeira3 from "../../../assets/geladeira3.jpeg";
import fogao1 from "../../../assets/fogao1.jpeg";
import fogao2 from "../../../assets/fogao2.jpeg";
import lavadora1 from "../../../assets/lavadora1.jpeg";
import lavalouca1 from "../../../assets/lavalouca1.jpeg";
import lavalouca2 from "../../../assets/lavalouca2.jpeg";

const produtos = [
  {
    nome: "Geladeira Frost Free Brastemp Side Inverse 540 litros",
    preco: 5819,
    img: geladeira1,
    id:1
  },
  {
    nome: "Refrigerador Consul Frost Free com 2 Portas Inox",
    preco: 2199,
    img: geladeira2,
    id:2
  },
  {
    nome: "Refrigerador Brastemp Frost Free - 375Litros",
    preco: 2499,
    img: geladeira3,
    id:3
  },
  {
    nome: "Fogão Consul 4 Bocas com Acendimento Automático - Inox",
    preco: 949,
    img: fogao1,
    id:4
  },
  {
    nome: "Fogão Atlas 4 Bocas Mônaco Automático",
    preco: 499,
    img: fogao2,
    id:5
  },
  {
    nome: "Lavadora de Roupas Automática Brastemp 9KG Branca - 110V",
    preco: 1899,
    img: lavadora1,
    id:6
  },
  {
    nome: "Lava-louças Brastemp Ative! 8 Serviços - Branca",
    preco: 2097,
    img: lavalouca1,
    id:7
  },
  {
    nome: "Lava-Louças Electrolux Display Digital - Inox",
    preco: 3849,
    img: lavalouca2,
    id:8
  },
];

function Produtos({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nossos Produtos</Text>
      {produtos.map((produto, index) => (
        <React.Fragment key={produto.id}>
          <Image source={produto.img} key={produto.id} style={styles.img} />
          <Text style={styles.produtos} key={index}>
            {produto.nome}- R$:{produto.preco}
          </Text>
        </React.Fragment>
      ))}
      <TouchableOpacity style={styles.btn} onPress={home}>
        <Text style={styles.texto}>Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Produtos;
