import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 35,

    fontWeight: "bold",

    marginTop: 20,
  },
image:{
  width: "30%",
    height: "15%",
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 20,
    aspectRatio: 1,
    alignSelf: "center",
},
  subtitulo: {
    fontSize: 20,

    fontWeight: "bold",

    marginTop: 15,
  },

  tituloCard: {
    fontSize: 100,

    fontWeight: "bold",

    color: "#1d3557",
  },
});

export default estilo;
