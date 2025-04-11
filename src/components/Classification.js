//Como posso usar o useState? - Perguntar

import { Text, StyleSheet } from 'react-native';

const Classification = ({ imc }) => { // Classificação do IMC a partir do valor do FormIMC.js
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso (< 18,5)';
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = 'Peso normal (18,5 - 24,9)';
    } else if (imc >= 25 && imc < 29.9) {
        classification = 'Sobrepeso (25 - 29,9)';
    } else if (imc >= 30) {
        classification = 'Obesidade (>= 30)';
    } else {
        classification = 'Classificação inválida';
    }

    return (
        <Text style={styles.classification}>
            Classificação: {classification}
        </Text>
    );
}

const styles = StyleSheet.create({
    classification: {
        fontSize: 18,
        marginTop: 10,
        color: '#333',
    },
});

export default Classification;