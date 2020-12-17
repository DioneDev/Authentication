import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function Home({route}){

	const navigation = useNavigation();

	async function logout(){
		await firebase.auth().signOut();

		alert('Deslogado com sucesso');
		navigation.navigate('SignIn');
	}

	return(
		<View style={styles.container}>
			<Text style={styles.title}>Seja bem vindo!</Text>

			<Text style={styles.email}>{route.params?.user}</Text>

			<TouchableOpacity style={styles.btn} onPress={logout}>
				<Text style={styles.textBtn}>Sair</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	title:{
		fontSize:25,
		marginBottom:30
	},
	email:{
		fontSize:20
	},
	btn:{
		width:'90%',
		height:40,
		backgroundColor:'red',
		alignItems:'center',
		justifyContent:'center',
		borderRadius:7,
		marginTop:30
	},
	textBtn:{
		fontSize:18,
		fontWeight:'bold',
		color:'#fff'
	}

});