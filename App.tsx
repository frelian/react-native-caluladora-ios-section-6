import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    // Uso de SafeAreaView para evitar el notch en IOs
    <SafeAreaView style={ styles.fondo } >
        <StatusBar 
            backgroundColor="black"
            barStyle="light-content" // Fix para la barra de estado de IOs y arreglar el notch
        />
        <CalculadoraScreen />
    </SafeAreaView>
    
  )
}

export default App;