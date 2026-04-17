import { View, Text, ScrollView, StyleSheet } from "react-native";
 
export default function Jogo() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
 
      <View style={styles.header}>
        <Text style={styles.headerSub}>ESPORTE</Text>
        <Text style={styles.titulo}>Rugby</Text>
        <View style={styles.divisor} />
      </View>
 
      <View style={styles.card}>
        <Text style={styles.cardIcone}>🏉</Text>
        <Text style={styles.cardTitulo}>O que é Rugby?</Text>
        <Text style={styles.cardTexto}>
          É um esporte coletivo de contato físico intenso, originado na Inglaterra em 1823, 
          onde duas equipes disputam a posse de uma bola oval para levá-la até a linha de 
          fundo adversária e pontuar, principalmente através do try (apoiar a bola no chão).
        </Text>
      </View>
 
      <View style={styles.card}>
        <Text style={styles.cardIcone}>🎯</Text>
        <Text style={styles.cardTitulo}>Objetivo do Jogo</Text>
        <Text style={styles.cardTexto}>
          O objetivo principal de um jogo é proporcionar entretenimento, diversão e lazer 
          aos participantes, envolvendo-os em um conflito artificial, definido por regras claras 
          e resultados mensuráveis. Ele visa estimular habilidades mentais e físicas, cooperação, 
          aprendizado e a superação de desafios, permitindo alcançar metas como vencer ou 
          completar tarefas.
        </Text>
      </View>
 
      <View style={styles.gridStats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>8</Text>
          <Text style={styles.statDesc}>jogadoras por time</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>80</Text>
          <Text style={styles.statDesc}>minutos de jogo</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>5</Text>
          <Text style={styles.statDesc}>pontos por try</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>1823</Text>
          <Text style={styles.statDesc}>ano de origem</Text>
        </View>
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
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#3b0764',
  },
  cardIcone: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '800',
    color: '#e9d5ff',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  cardTexto: {
    fontSize: 14,
    color: '#c4b5fd',
    lineHeight: 22,
  },
  gridStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  statItem: {
    width: '47%',
    backgroundColor: '#2d0060',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4c1d95',
  },
  statNumero: {
    fontSize: 28,
    fontWeight: '900',
    color: '#a855f7',
    marginBottom: 4,
  },
  statDesc: {
    fontSize: 12,
    color: '#a78bfa',
    textAlign: 'center',
    fontWeight: '600',
  },
});
 
