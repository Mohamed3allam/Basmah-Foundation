import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Mission } from './components/Mission';
import { Projects } from './components/Projects';
// import { Statistics } from './components/Statistics';
import { Footer } from './components/Footer';
import FirebaseActivation from './FirebaseActivation';

FirebaseActivation();




function App() {
    
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);


  return (
    <div>

      <Header/>

      <Mission/>

      <Projects/>

      {/* <Statistics/> */}

      <Footer/>

    </div>

  );
}

export default App;
