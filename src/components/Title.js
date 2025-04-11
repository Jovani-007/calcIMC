import { Text, StyleSheet } from 'react-native';

const Title = () => { // Componente para o título
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Cascadia Code',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#f0f0f0',
    },
});

export default Title;