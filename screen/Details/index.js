import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Home() {
  const route = useRoute();
  return (
    <View style={estilo.container}>
      <View style={estilo.card}>
      <Image source={route.params.imagem} style={estilo.imagem} />
      <Text>{route.params.titulo}</Text>
      <Text>{route.params.texto}</Text>
      <Text>{route.params.texto2}</Text>
      <Text>{route.params.porcentagem}</Text>     
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF69B4",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#00FF7F", // fundo verde
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // centraliza os itens horizontalmente
  },
  imagem: {
    width: 200,
    height: 200,
  },
});
