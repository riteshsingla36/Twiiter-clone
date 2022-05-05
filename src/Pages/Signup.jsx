import React, { useState } from "react";
import banner from "../assets/twitter-signup.png"
import logo from "../assets/twitter-logo.png"
import googlelogo from "../assets/Google_Icon.webp"
import applelogo from "../assets/apple-logo.png"
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <div>
        <img src={banner} alt="img" />
      </div>
      <div>
        <img src={logo} alt="img" width="60px" />
        <Title>Happening now</Title>
        <Small>Join Twitter Today.</Small>
        <GoogleSignup>
          <Image src={googlelogo} alt="google" />
          <GoogleText>Sign up with Google</GoogleText>
        </GoogleSignup>
        <GoogleSignup>
          <AppleImage src={applelogo} alt="img" />
          <AppleText>Sign up with Apple</AppleText>
        </GoogleSignup>

        <EmailSignup>
          <EmailText>Sign up with phone or email</EmailText>
        </EmailSignup>

        <ExtraSmall>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</ExtraSmall>

        <GoogleSignup onClick={() => {
          showModal()
        }}>
          <GoogleText>Sign in</GoogleText>
        </GoogleSignup>
      </div>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <h1>Sign in to Twitter</h1>
        <GoogleSignup>
          <Image src={googlelogo} alt="google" />
          <GoogleText>Sign in with Google</GoogleText>
        </GoogleSignup>
        <GoogleSignup>
          <AppleImage src={applelogo} alt="img" />
          <AppleText>Sign up with Apple</AppleText>
        </GoogleSignup>
        <GoogleSignup>
          <GoogleText>Next</GoogleText>
        </GoogleSignup>
        <GoogleSignup>
          <GoogleText>Forgot Password ?</GoogleText>
        </GoogleSignup>

      </Modal>

    </Container>
  )
};

export default Signup;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 4.5em;
  text-align: left;
`;

const Small = styled(Title)`
  font-size: 2.3em;
`

const GoogleSignup = styled.div`
  width:60%;
  padding : 10px 10px;
  border: 1px solid #d1c9c9;
  border-radius: 40px;
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom : 10px;
  &:hover {
    cursor:pointer;
    background-color: #cfcfcf5f;
  }
`

const Image = styled.img`
  width : 25px;
  height : 25px;
`

const GoogleText = styled.h4`
 color : #808080;
 font-weight: 600;
 margin:0;
 padding:0;
`;

const AppleImage = styled.img`
  width :25px;
  height : 25px;
`;

const AppleText = styled(GoogleText)`
  color : black
`;

const EmailSignup = styled(GoogleSignup)`
  background-color: #00a7fa;
  padding: 0.5em;
  &:hover{
    background-color:#0792d8;
  }
`;

const EmailText = styled(AppleText)`
  color:white;
`;

const ExtraSmall = styled.p`
  width: 50%;
  font-size: 11px;
`
