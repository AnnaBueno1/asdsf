import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";

export default function Geral({ route, navigation }) {
  const { jogadoras } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor="#1a0033" />

      <View style={styles.header}>
        <Text style={styles.headerSub}>BLACK FERNS</Text>
        <Text style={styles.titulo}>Elenco</Text>
        <View style={styles.divisor} />
      </View>

      {jogadoras.map((jogadora, index) => (
        <TouchableOpacity
          key={jogadora.id}
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("DetalhesJogadora", { jogadora })}
        >
          <View style={styles.cardNumero}>
            <Text style={styles.numero}>{index + 1}</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.nomeJogadora}>{jogadora.nome}</Text>
            <Text style={styles.posicaoJogadora}>{jogadora.posicao}</Text>
            <Text style={styles.equipeJogadora}>{jogadora.equipe}</Text>
          </View>
          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.botaoDestaque}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Jogo")}
        >
          <Text style={styles.botaoDestaqueTexto}>⚽  Sobre o Rugby</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Desenvolvedoras")}
        >
          <Text style={styles.botaoSecundarioTexto}>👩‍💻  Desenvolvedoras</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0020',
  },
  content: {
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
    marginTop: 10,
  },
  headerSub: {
    fontSize: 11,
    letterSpacing: 6,
    color: '#c084fc',
    fontWeight: '700',
    marginBottom: 6,
  },
  titulo: {
    fontSize: 38,
    fontWeight: '900',
    color: '#f5f0ff',
    letterSpacing: 1,
  },
  divisor: {
    width: 50,
    height: 3,
    backgroundColor: '#a855f7',
    borderRadius: 2,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#1e0040',
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderColor: '#3b0764',
    shadowColor: '#a855f7',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  cardNumero: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4c1d95',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  numero: {
    color: '#e9d5ff',
    fontWeight: '800',
    fontSize: 13,
  },
  cardInfo: {
    flex: 1,
  },
  nomeJogadora: {
    color: '#f5f0ff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  posicaoJogadora: {
    color: '#c084fc',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 1,
  },
  equipeJogadora: {
    color: '#7c3aed',
    fontSize: 12,
  },
  seta: {
    color: '#7c3aed',
    fontSize: 26,
    fontWeight: '300',
    marginLeft: 6,
  },
  footer: {
    marginTop: 28,
    gap: 12,
  },
  botaoDestaque: {
    backgroundColor: '#7c3aed',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#a855f7',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  botaoDestaqueTexto: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  botaoSecundario: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#4c1d95',
  },
  botaoSecundarioTexto: {
    color: '#c084fc',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
