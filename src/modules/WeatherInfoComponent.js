import { useState } from "react";
import styled from "styled-components";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Homepage = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  width: 150px;
  background-color: black;
  padding:0px;
  & button {
    background-color: black;
    font-size: 14px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

const WeatherInfoComponent = (props) => {
  const {weather} = props;
  const {name, value , fetchWeather } = props;
  const [isFahranheight, setIsFahranheight] = useState(false)

    return (
        <>
         <WeatherContainer>
                <Condition>

                {isFahranheight ? <span>{`${Math.floor(((weather?.main?.temp - 273)*(1.8))+32)}℉`} </span> : <span> {`${Math.floor(weather?.main?.temp - 273)}°C`}</span>} 
               
                    {`  |  ${weather?.weather[0].description}`} 
                
                   <div> <button onClick={() => setIsFahranheight(!isFahranheight)}>{isFahranheight ? "Celsius (°C) " : "Fahrenheit (℉) "} </button> </div>
                </Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
            </WeatherContainer>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

            <Homepage>
        <button >Anasayfa</button>
        </Homepage>
        </>
    );
  };
  export default WeatherInfoComponent;

  