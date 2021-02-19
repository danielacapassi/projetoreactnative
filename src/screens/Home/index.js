import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

function Home({ navigation }) {
  function produtos() {
    navigation.navigate("Produtos");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja Bem Vindx!</Text>
      <Text style={styles.introducao}>
        Aqui no FullStack Eletro Mobile Programadores tem desconto!!!
      </Text>
      <Image
        style={styles.imagem}
        source={require("../../../assets/eletrodomesticos.png")}
      />
      <TouchableOpacity style={styles.btn} onPress={produtos}>
        <Text style={styles.texto}>Nossos Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
