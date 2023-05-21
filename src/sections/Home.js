import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import CoverVideo from '../components/CoverVideo';
import NavBar from '../components/NavBar';
import About from './About';





const Section = styled.section`
  position: relative;
  min-height: 100vh;
overflow: hidden;

`;

const Home = () => {
  return (
    <Section  id="home">
     
        <Logo />
       <NavBar />
        <CoverVideo />
        
      
    </Section>
  );
};

export default Home;