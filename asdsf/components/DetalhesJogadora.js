import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
 
// Mapa de imagens locais
const imagensJogadoras = {
  'jogadora1.jpg': require('../assets/jogadorasImagens/jogadora1.jpeg'),
  'jogadora2.jpg': require('../assets/jogadorasImagens/jogadora2.jpeg'),
  'jogadora3.jpg': require('../assets/jogadorasImagens/jogadora3.jpeg'),
  'jogadora4.jpg': require('../assets/jogadorasImagens/jogadora4.jpeg'),
  'jogadora5.jpg': require('../assets/jogadorasImagens/jogadora5.jpeg'),
  'jogadora6.jpg': require('../assets/jogadorasImagens/jogadora6.jpeg'),
  'jogadora7.jpg': require('../assets/jogadorasImagens/jogadora7.jpeg'),
  'jogadora8.jpg': require('../assets/jogadorasImagens/jogadora8.jpeg'),
};
 
export default function DetalhesJogadora({ route }) {
  const { jogadora } = route.params;
  const imagem = imagensJogadoras[jogadora.imagem] || imagensJogadoras['jogadora1.jpg'];
 
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      {/* Cabeçalho com foto */}
      <View style={styles.header}>
        <Image source={imagem} style={styles.foto} />
        <View style={styles.badgeNumero}>
          <Text style={styles.badgeNumeroTexto}>#{jogadora.numero}</Text>
        </View>
        <Text style={styles.nome}>{jogadora.nome}</Text>
        <Text style={styles.posicao}>{jogadora.posicao}</Text>
        <View style={styles.equipeTag}>
          <Text style={styles.equipeTexto}>{jogadora.equipe}</Text>
        </View>
      </View>
 
      {/* Informações pessoais */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>INFORMAÇÕES PESSOAIS</Text>
        <View style={styles.card}>
          <InfoRow label="Idade" valor={`${jogadora.idade} anos`} />
          <InfoRow label="Nacionalidade" valor={jogadora.nacionalidade} />
        </View>
      </View>
 
      {/* Condição física */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>CONDIÇÃO FÍSICA</Text>
        <View style={styles.gridFisico}>
          <StatBox label="Altura" valor={jogadora.condicaoFisica.altura} icone="📏" />
          <StatBox label="Peso" valor={jogadora.condicaoFisica.peso} icone="⚖️" />
          <StatBox label="Vel. 40m" valor={jogadora.condicaoFisica.velocidade40m} icone="⚡" />
          <StatBox label="Cooper" valor={jogadora.condicaoFisica.resistenciaCooper} icone="🏃" />
        </View>
      </View>
 
    </ScrollView>
  );
}
 
function InfoRow({ label, valor }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValor}>{valor}</Text>
    </View>
  );
}
 
function StatBox({ label, valor, icone }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statIcone}>{icone}</Text>
      <Text style={styles.statValor}>{valor}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0020',
  },
  content: {
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#1a0035',
    borderBottomWidth: 1,
    borderBottomColor: '#2d0060',
    position: 'relative',
  },
  foto: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#7c3aed',
    marginBottom: 16,
  },
  badgeNumero: {
    position: 'absolute',
    top: 120,
    right: '30%',
    backgroundColor: '#7c3aed',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 2,
    borderColor: '#0f0020',
  },
  badgeNumeroTexto: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
  nome: {
    fontSize: 26,
    fontWeight: '900',
    color: '#f5f0ff',
    textAlign: 'center',
    marginBottom: 4,
  },
  posicao: {
    fontSize: 14,
    color: '#c084fc',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 12,
  },
  equipeTag: {
    backgroundColor: '#3b0764',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 20,
  },
  equipeTexto: {
    color: '#e9d5ff',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 1,
  },
  secao: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  secaoTitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7c3aed',
    letterSpacing: 3,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1e0040',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3b0764',
    overflow: 'hidden',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#2d0060',
  },
  infoLabel: {
    color: '#a78bfa',
    fontSize: 14,
    fontWeight: '600',
  },
  infoValor: {
    color: '#f5f0ff',
    fontSize: 14,
    fontWeight: '700',
  },
  gridFisico: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statBox: {
    backgroundColor: '#1e0040',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3b0764',
    padding: 16,
    alignItems: 'center',
    width: '47%',
  },
  statIcone: {
    fontSize: 22,
    marginBottom: 6,
  },
  statValor: {
    color: '#f5f0ff',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },
  statLabel: {
    color: '#a78bfa',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
