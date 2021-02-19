import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#dc3545",
  },
  titulo: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "black",
    marginTop: 12,
    padding: 10,
    borderRadius: 6,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  produtos: {
    marginTop: 15,
    padding: 17,
    fontSize: 19,
    color: "black",
    textAlign: "center",
  },
  img: {
    marginTop: 20,
    marginLeft: 110,
    marginRight: 70,
    marginBottom: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export default styles;
