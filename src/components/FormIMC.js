import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';
import { useState } from 'react';

const FormIMC = () => {
    const [peso, setPeso] = useState('') // Estado para armazenar o peso
    const [altura, setAltura] = useState('') // Estado para armazenar a altura
    const [imc, setImc] = useState(null) // Estado para armazenar o IMC calculado

    const calcularIMC = () => { // Função para calcular o IMC
        
        if (peso === '' || altura === '') {
            alert('Preencha todos os campos!')
            return
        }
        
        if (peso && altura) { 
            const alturaMetros = parseFloat(altura) / 100
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2)
            setImc(imcCalculado)
        }
    }

    return ( // Formulário para entrada de dados
        <View style={styles.formContainer}>
            <TextInput style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput 
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {imc && <Classification imc={imc} />} 
            {imc && <IdealWeight altura={altura} />} 
            
        </View>
    )
}

const styles = StyleSheet.create({ // Estilos para o formulário
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
})

export default FormIMC