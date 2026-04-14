import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Geral({ route, navigation }) {
  const { jogadoras } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista de Jogadoras</Text>

      {jogadoras.map((jogadora) => (
        <TouchableOpacity
          key={jogadora.nome} 
          style={styles.card}
          onPress={() => navigation.navigate("DetalhesJogadora", { jogadora })}
        >
          <Text style={styles.nomeJogadora}>{jogadora.nome}</Text>
          <Text style={styles.equipeJogadora}>{jogadora.equipe}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.footer}>
        <TouchableOpacity 
            style={styles.botaoMenu} 
            onPress={() => navigation.navigate("Jogo")}
        >
          <Text style={styles.textoBotao}>Ir para o Jogo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.botaoMenu} 
            onPress={() => navigation.navigate("Desenvolvedoras")}
        >
          <Text style={styles.textoBotao}>Sobre a Desenvolvedora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4B0082',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#9370DB',
  },
  card: {
    backgroundColor: '#8A2BE2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  nomeJogadora: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  equipeJogadora: {
    color: '#D8BFD8',
    fontSize: 19,
  },
  footer: {
    marginTop: 20,
    paddingBottom: 40,
  },
  imagem:{
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  botaoMenu: {
    backgroundColor: '#663399',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    fontSize: 3,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  }
});