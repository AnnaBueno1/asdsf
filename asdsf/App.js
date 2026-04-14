import { useState } from 'react'; // Certifique-se que é do 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetalhesJogadora from './components/DetalhesJogadora';
import Geral from './components/Geral';
import Jogo from './components/Jogo';
import rugbyPlayers from './components/DadosJogadoras';
import Desenvolvedoras from './components/Desenvolvedoras';

const Stack = createNativeStackNavigator();

export default function App() {

    const [jogadoras, setJogadoras] = useState(rugbyPlayers);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Geral" 
                    component={Geral} 
                    initialParams={{ jogadoras }} 
                />
                <Stack.Screen 
                    name="DetalhesJogadora" 
                    component={DetalhesJogadora} 
                />
                <Stack.Screen
                name='Desenvolvedoras'
                component={Desenvolvedoras}
                />
                <Stack.Screen
                name='Jogo'
                component={Jogo}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}