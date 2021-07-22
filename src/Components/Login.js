import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://hindustanuniv.ac.in/assets/images/HITS-Logo.png" />

        <h1>Sign In to HITS Connect</h1>
        <p>hits chennai</p>

        <Button onClick={signIn}>Login</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 80px;
    margin-bottom: 40px;
    background-color: black;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
