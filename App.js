 import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import {Container} from 'react-bootstrap';
import React, {useState}

function App () {

const getWeatherByCurrentLocation = async(lat, lon) =>{

  
  try {
    let url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=547efbb8e2e0f9fb24c4ae6ad98c03bb&units=metric`;
    

    const res = await fetch(url);
    const data = await res.json();

  } catch (err) {
    console.log(err.message);
  }
};
    
  const getWeatherByCity = () => {
    try {

      let url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}appid={547efbb8e2e0f9fb24c4ae6ad98c03bb}';

    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
    setLoading(false);
    
    
    }catch (err) {
      console.log(err);
    }
  };

  useEffect(()) => {
    if(city == null){
      get
    }
  });
  return (  
    <>  
  <Container className="vh-100">
    <div></div>
    <div className="main-container">
        <WeatherBox />
        <WeatherButton />
    </div>
  </Container>
  </>
  );
}
export default App;  