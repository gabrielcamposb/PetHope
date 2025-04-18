import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ValidacaoContaScreen() {
  const [codigo, setCodigo] = useState(['', '', '', '']);
  const navigation = useNavigation();

  // Função para lidar com a entrada do código
  const handleChangeText = (text, index) => {
    if (text.length <= 1) {
      let newCodigo = [...codigo];
      newCodigo[index] = text;
      setCodigo(newCodigo);
    }
  };

  const handleVoltar = () =>{
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.voltarButton} onPress={handleVoltar}>
        <Image source={require('../assets/Voltar.png')} style={styles.voltarImagem} />
      </TouchableOpacity>  
      <View style={styles.header}>
        <Image source={require('../assets/Logo 1 2.png')} style={styles.logo} />
        <Text style={styles.subtitle}>Entre para continuar</Text>
      </View>
      
      <LinearGradient colors={['#EB5375', '#E34D76', '#D84477', '#C73578']} style={styles.gradient}>
        <Text style={styles.title}>Validação da Conta</Text>
        <Text style={styles.description}>
          Por favor insira o código de 4 dígitos enviado no seu email
        </Text>
        
        <View style={styles.codeContainer}>
          {codigo.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
            />
          ))}
        </View>
        
        <TouchableOpacity>
          <Text style={styles.resendText}>Reenviar o código</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Validar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  voltarButton:{
    position:'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    marginTop: 30,
  },   
  
  voltarImage:{
    width:30,
    height:30,
    resizeMode: 'contain',
  },

  container: { 
    flex: 1,
    backgroundColor: '#FFF4EC',
    alignItems: 'center'
   },

  header: { 
    marginTop: 100,
    alignItems: 'center',
    marginBottom: 50
   },

  logo: { 
    width: 300,
    height: 150, 
    resizeMode: 'contain'
   },

  subtitle: { 
    fontSize: 15, 
    color: '#f45b74', 
    fontWeight: 'Poppins'
   },

  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'ABeeZee',
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
    
  },
  description: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'Poppins',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 70,
    height: 70,
    backgroundColor: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  resendText: {
    color: '#FFFFFF',
    fontSize: 20,
    textDecorationLine: 'Poppins',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B2BC29',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'Poppins',
  },

  voltarImagem: {
    marginTop: 25
  }
});