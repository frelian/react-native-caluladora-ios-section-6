import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    return (

        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.resultadoPequeno } >1,500.00</Text>
            <Text style={ styles.resultado } >1,500.00</Text>

                {/* Colores
                    #2D2D2D gris oscuro
                    #9B9B9B gris claro
                    #FF9427 naranja
                */}

            {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="C" color="#9B9B9B" />
                <BotonCalc texto="+/-" color="#9B9B9B" />
                <BotonCalc texto="del" color="#9B9B9B" />
                <BotonCalc texto="/" color="#FF9427" />
            </View>

            {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="7" />
                <BotonCalc texto="8" />
                <BotonCalc texto="9" />
                <BotonCalc texto="x" color="#FF9427" />
            </View>

            {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="4" />
                <BotonCalc texto="5" />
                <BotonCalc texto="6" />
                <BotonCalc texto="-" color="#FF9427" />
            </View>

            {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="1"  />
                <BotonCalc texto="2" />
                <BotonCalc texto="3" />
                <BotonCalc texto="+" color="#FF9427" />
            </View>

            {/* Fila de botones */}
            <View style={ styles.fila }>
                {/* Si la propiedad es ancho={ true } typescript es lo mismo que solo poner ancho */}
                <BotonCalc texto="0" ancho />
                <BotonCalc texto="."/>
                <BotonCalc texto="=" color="#FF9427" />
            </View>

        </View>
    )
}