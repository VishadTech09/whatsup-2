import Head from "next/head";
import styled from 'styled-components';
import {Button} from '@mui/material';
import {auth, provider} from '../../../app-firebase';
import {signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const signIn = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if(credential){
                let token = credential.accessToken;
            }
                
            // The signed-in user info.
            const user = result.user;
            console.log(user);

        }).catch((error)=>{
            console.log(error);
        });;

    }
    return (
        <Container>
            <Head>
                <title>
                    Login Page</title></Head>
            <LoginContainer>
                <Logo src='https://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png' />
                <Button onClick={signIn}>Sign In With Google</Button>
        
            </LoginContainer>
        </Container>
    )
}

export default Login;
const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;
const LoginContainer = styled.div`
display:flex;
flex-direction: column;
background-color: white;
padding:100px;
border-radius: 5px;
box-shadow: 10px 10px ;
`;
const Logo = styled.img`
width: 200px;
align-items: center;
justify-content: center;
`;