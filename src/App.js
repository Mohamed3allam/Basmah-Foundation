import './App.css';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Mission } from './components/Mission';
import { Projects } from './components/Projects';
// import { Statistics } from './components/Statistics';
import { Footer } from './components/Footer';
import FirebaseActivation from './FirebaseActivation';
import styled from 'styled-components';



const LoaderDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in-out;
`
const Loader = styled.div`
  border: 16px solid rgb(0, 18, 66);
  border-radius: 50%;
  border-top: 16px solid #ffc809;
  width: 70px;
  height: 70px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50, -50);
`

function App() {
  const [pageLoaded, setPageLoaded] = useState(false)

  // useEffect(() => {
  //   if (document.readyState === 'complete') {
  //     setTimeout(() => {

  //       setPageLoaded(true)
  //     }, 1000)
  //   }
  // }, [])

  FirebaseActivation();

  return (
    <>
      // <LoaderDiv style={{ opacity: pageLoaded ? 0 : 1 }}>
      //   <Loader></Loader>
      // </LoaderDiv>
      <div style={{ transition: '0.3s all ease-in-out', opacity: pageLoaded ? 1 : 0 }}>

        <Header />
        <Mission />
        <Projects />
        {/* <Statistics/> */}
        <Footer />

      </div>
    </>

  );
}

export default App;
