import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import Header from "../../components/header";
import Card from "../../components/card";
import ROTINAS from '../../data/index';



export default function Home() {
 return (
    <View style={estilo.container}>
    <Header></Header>
      <View>
        <Text style={estilo.titulo}>Sorvetes de Palito</Text>
        <FlatList
          data={ROTINAS.slice(0, 3)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              
              titulo={item.titulo}
              imagem={item.imagem}
              porcentagem={item.porcentagem}
              texto={item.texto}
            />
          )}
          horizontal={true}
          contentContainerStyle={estilo.lista}
        />
      </View>
      <View>
        <Text style={estilo.titulo}>Sorvete De Potes</Text>
        <FlatList
          data={ROTINAS.slice(3, 6)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              imagem={item.imagem}
              porcentagem={item.porcentagem}
              texto={item.texto}
            />
          )}
          horizontal={true}
          contentContainerStyle={estilo.lista}
        />
      </View>
      <View>
        <Text style={estilo.titulo}>Milkshakes</Text>
        <FlatList
          data={ROTINAS.slice(6, 9)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              imagem={item.imagem}
              porcentagem={item.porcentagem}
              texto={item.texto}
            />
          )}
          horizontal={true}
          contentContainerStyle={estilo.lista}
        />
      </View>
      <View>
        <Text style={estilo.titulo}>Sorvetes Expressos</Text>
        <FlatList
          data={ROTINAS.slice(9, 12)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              imagem={item.imagem}
              porcentagem={item.porcentagem}
              texto={item.texto}
            />
          )}
          horizontal={true}
          contentContainerStyle={estilo.lista}
        />
      </View>
    </View>      
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF69B4",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },
  lista: {
    flexGrow: 1,
  },
  titulo: {
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
    color: "#1d3557",
    marginBottom: 10,
  },
});
