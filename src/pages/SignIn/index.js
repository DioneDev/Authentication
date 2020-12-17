import React, {useState} from 'react';
import {
	Background,
	Container,
	ImageBackground,
	Logo,
	AreaInput,
	Input,
	SubmitButton,
	SubmitText,
	Link,
	LinkText
} from './styles';

import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';

export default function Login(){

	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function logar(){
		await firebase.auth().signInWithEmailAndPassword(email,password)
		.then((value) => {
			navigation.navigate('Home',{user: value.user.email})
			//Navegando usuario para Home e levando o email do usuario para a tela home
		})
		.catch((error) => {
			alert('Ops! Algo deu errado! :(');
			return;
			//Se der algum erro, vai mostrar o alert e barrar aqui.
		})
		setEmail('');
		setPassword('');
	}

	return(
		<Background>

			<ImageBackground
				source={require('../../assets/bg-roberto-nickson.jpg')}>

				<Container>

					<Logo source={require('../../assets/login.png')} /> 

					<AreaInput>
						<Input 
							placeholder="Email"
							autoCorrect={false}
							autoCapitalize="none"
							underlineColorAndroid="transparent"
							value={email}
							onChangeText={(text) => setEmail(text)}		
						/>
					</AreaInput>

					<AreaInput>
						<Input 
							placeholder="Password"
							autoCorrect={false}
							autoCapitalize="none"
							underlineColorAndroid="transparent"
							secureTextEntry={true}
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
					</AreaInput>

					<SubmitButton onPress={logar}>
						<SubmitText>Acessar</SubmitText>
					</SubmitButton>

					<Link onPress={()=> navigation.navigate('SignUp') }>
						<LinkText>Criar conta</LinkText>
					</Link>

				</Container>

			</ImageBackground>

		</Background>
	);
}