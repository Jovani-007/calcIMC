//Como posso usar o useState? - Perguntar

import { Text, StyleSheet } from 'react-native';

const IdealWeight = ({ altura }) => { // Cálculo do peso ideal a partir da altura
    let idealMin = 18.5 * (altura/100 * altura/100);
    let idealMax = 24.9 * (altura/100 * altura/100);

    return (
        <Text style={styles.ideal}>
            Peso ideal: {idealMin.toFixed(1)} kg - {idealMax.toFixed(1)} kg
        </Text>
    )
}

const styles = StyleSheet.create({
    ideal: {
        fontSize: 18,
        marginTop: 10,
        color: '#333',
    },
});

export default IdealWeight;