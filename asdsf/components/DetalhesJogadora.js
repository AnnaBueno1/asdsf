import { View, Text, ScrollView, StyleSheet } from "react-native";
 
export default function Desenvolvedoras() {
  const desenvolvedoras = [
    {
      id: 1,
      nome: "Anna Clara Estanislau Bueno",
      idade: 17,
      iniciais: "AC",
    },
    {
      id: 2,
      nome: "Hadassa Oshima Batista",
      idade: 17,
      iniciais: "HO",
    },
  ];
 
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
 
      <View style={styles.header}>
        <Text style={styles.headerSub}>EQUIPE</Text>
        <Text style={styles.titulo}>Desenvolvedoras</Text>
        <View style={styles.divisor} />
      </View>
 
      {desenvolvedoras.map((dev) => (
        <View key={dev.id} style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarTexto}>{dev.iniciais}</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.nome}>{dev.nome}</Text>
            <Text style={styles.idade}>{dev.idade} anos</Text>
          </View>
        </View>
      ))}
 
      <View style={styles.sobreCard}>
        <Text style={styles.sobreIcone}>💻</Text>
        <Text style={styles.sobreTitulo}>Sobre o Projeto</Text>
        <Text style={styles.sobreTexto}>
          Projeto desenvolvido em React Native com o intuito de apresentar
          informações sobre jogadoras de rugby feminino das Black Ferns.
        </Text>
      </View>
 
      <View style={styles.techCard}>
        <Text style={styles.techTitulo}>TECNOLOGIAS</Text>
        <View style={styles.techGrid}>
          <View style={styles.techBadge}>
            <Text style={styles.techTexto}>React Native</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techTexto}>JavaScript</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techTexto}>Expo</Text>
          </View>
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
 
  // Header
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
    fontSize: 34,
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
 
  // Card da desenvolvedora
  card: {
    backgroundColor: '#1e0040',
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#3b0764',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#4c1d95',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#7c3aed',
  },
  avatarTexto: {
    color: '#e9d5ff',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 1,
  },
  cardInfo: {
    flex: 1,
  },
  nome: {
    color: '#f5f0ff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  idade: {
    color: '#c084fc',
    fontSize: 13,
    fontWeight: '600',
  },
 
  // Card sobre o projeto
  sobreCard: {
    backgroundColor: '#1e0040',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#3b0764',
  },
  sobreIcone: {
    fontSize: 28,
    marginBottom: 10,
  },
  sobreTitulo: {
    fontSize: 16,
    fontWeight: '800',
    color: '#e9d5ff',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  sobreTexto: {
    fontSize: 14,
    color: '#c4b5fd',
    lineHeight: 22,
  },
 
  // Card de tecnologias
  techCard: {
    backgroundColor: '#2d0060',
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: '#4c1d95',
  },
  techTitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7c3aed',
    letterSpacing: 3,
    marginBottom: 12,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: '#3b0764',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7c3aed',
  },
  techTexto: {
    color: '#e9d5ff',
    fontWeight: '700',
    fontSize: 13,
  },
});
