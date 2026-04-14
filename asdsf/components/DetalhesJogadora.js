import { View, Text, Image } from "react-native";
const Imagem = require("../assets/jogadorasImagens/jogadora1.jpeg");
export default function DetalhesJogadora({ route }) {
  const { jogadora } = route.params;
  return (
    <View>
      {/*<Image source={{ uri: "../assets/jogadorasImagens/jogadora1.jpeg" }} style={{ width: 200, height: 200 }} />*/}
      <Image source={Imagem} style={{ width: 200, height: 200 }} />
      <Text>Nome: {jogadora.nome}</Text>
      <Text>Idade: {jogadora.idade}</Text>
      <Text>Nacionalidade: {jogadora.nacionalidade}</Text>
      <Text>Posição: {jogadora.posicao}</Text>
      <Text>Número: {jogadora.numero}</Text>
      <Text>Equipe: {jogadora.equipe}</Text>
      <Text>Altura: {jogadora.condicaoFisica.altura}</Text>
      <Text>Peso: {jogadora.condicaoFisica.peso}</Text>
      <Text>Velocidade 40m: {jogadora.condicaoFisica.velocidade40m}</Text>
      <Text>Resistência Cooper: {jogadora.condicaoFisica.resistenciaCooper}</Text>
      

    </View>
  );
}

