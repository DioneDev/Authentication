import React, {useState} from 'react';
import {
	Background,
	Container,
	ImageBackground,
	AreaInput,
	Input,
	SubmitButton,
	SubmitText,
} from '../SignIn/styles';

import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';

export default function SignUp(){

	const navigation = useNavigation();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function cadastrar(){
		await firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((value) => {
			navigation.navigate('SignIn', {user:value.user.email})
		})
		.catch((error) => {
			alert('Ops! Algo deu errado no cadastro!');
			console.log(error);
			return;
		})

		setName('');
		setEmail('');
		setPassword('');
	}

	return(

		<Background>

				<ImageBackground
					source={require('../../assets/bg-roberto-nickson.jpg')}
				>

					<Container>

						<AreaInput>
							<Input 
								placeholder="Nome"
								autoCorrect={false}
								autoCapitalize="none"
								underlineColorAndroid="transparent"
								value={name}
								onChangeText={(text) => setName(text)}
											
							/>
						</AreaInput>

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
								placeholder="Senha"
								autoCorrect={false}
								autoCapitalize="none"
								secureTextEntry={true}
								underlineColorAndroid="transparent"
								value={password}
								onChangeText={(text) => setPassword(text)}
							/>
						</AreaInput>

						<SubmitButton onPress={cadastrar}>
							<SubmitText>Cadastrar</SubmitText>
						</SubmitButton>

					</Container>

				</ImageBackground>

		</Background>
	);
}