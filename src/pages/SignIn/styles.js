Background,
ImageBackground,
	Container,
	Logo,
	AreaInput,
	Input,
	SubmitButton,
	SubmitText,
	Link,
    LinkText


import styled from 'styled-components/native';

export const Background = styled.View`
	flex:1;
`;
export const ImageBackground = styled.ImageBackground`
	flex:1;
`;
export const Container = styled.KeyboardAvoidingView`
	flex:1;
	align-items:center;
	justify-content:center;	
`;
export const Logo = styled.Image`
	margin-bottom:10px;
`;
export const AreaInput = styled.View`
	flex-direction:row;
`;
export const Input = styled.TextInput.attrs({
	placeholderTextColor:'rgba(255,255,255,0.2)'
})`
	background-color:rgba(0,0,0,0.20);
	width:90%;
	font-size:17px;
	color:#fff;
	margin-bottom:15px;
	padding:10px;
	border-radius:7px;
`;
export const SubmitButton = styled.TouchableOpacity`
	align-items:center;
	justify-content:center;
	border-width:1px;
	border-color:#fff;
	width:90%;
	height:45px;
	border-radius:7px;
	margin-top:10px;
`;
export const SubmitText = styled.Text`
	font-size:20px;
	color:#fff;
	font-weight:bold;
`;
export const Link = styled.TouchableOpacity`
	margin-top:5px;
	margin-bottom:14px;
`;
export const LinkText = styled.Text`
	color:#fff;
	font-weight:bold;
`;
