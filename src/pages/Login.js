import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import {login} from '../components/Login/LoginInfo';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.cancel ? "royalblue" : "white"};
  color: ${props => props.cancel ? "white" : "royalblue"};

  font-size: 1em;
  margin: 1em;
  /*padding: 0.25em 1em;*/
  border: 2px solid royalblue;
  border-radius: 3px;
`;

const MainContainer = styled.div`
display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; // 100% view height
width: 100vw; // 100% view width
position: absolute; // so it goes behind the current content;
flex-direction: column;
grid-row-gap: 25px;
`;

const Screen = styled.div`
  /* all declarations will be prefixed */  
  background: royalblue;    
  height:100%;
  width:100%;
  position:absolute;  
  `;

  export const LandingBackground = styled("div")`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg");
    background-position: 10% 50%;
    background-size: cover;
    border-bottom: grey 1px solid;
    height: 100%;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  /*background: papayawhip;*/
  border: none;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  
`;

const Hint = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Error = styled.div`
  color: palevioletred;
  font-weight: bold;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  border: 2px solid palevioletred;
  border-radius: 3px;  
  background: papayawhip; 
`;

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();  
  
  const HandleLogin = async () => {
    const loginStatus = JSON.parse(await login(userName, password));
    if(loginStatus){
      if(loginStatus.response){
        localStorage.setItem("USER-APP", JSON.stringify(loginStatus));
        history.push('/');
      }
      else{
        setError(loginStatus.error);
      }
      
    }
  };

  const HandleLoginCancel = async () => {
    history.push('/');
  }

  return (
    <Screen>
      <MainContainer>
        <Wrapper>
        <div>
          <Input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <Input type="password" inputColor="rebeccapurple" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <Button onClick={HandleLogin}>Login</Button>
          <Button cancel onClick={HandleLoginCancel}>Cancel</Button>
        </div>
        <div>
          <Hint>Hint: User / User</Hint>
        </div>
        <div>
          <Error> {error}  </Error>
        </div>
        </Wrapper>        
      </MainContainer>
    </Screen>
  );
};

export default Login;