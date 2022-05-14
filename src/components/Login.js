import React from 'react'
import styled from 'styled-components'

function Login() {
  const desc = "Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by ₹1."
  console.log("Login to unlock entire Nav-bar functionality! P.s. It Works! ")
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="images/cta-logo-one.svg" alt="Logo-pic"/>
          <SignUp href="/home"> Get All There </SignUp>
          <Description> {desc} </Description>
          <CTALogoTwo src="images/cta-logo-two.png" alt="Logo-pic"/>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  margin-botton: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  height: 100%;
`

const BgImage = styled.div`
  background-image: url("images/login-background.jpg");
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

// Call To Action
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  font-weight: bold;
  font-size: 18px;
  background-color: #0064e5;
  color: #f9f9f9;
  width: 100%;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-bottom: 12px;

&:hover {
  background-color: #0483ee;
  cursor: pointer;
}
`
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin: 0 0 24px;
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  margin-align: bottom;
`


export default Login
