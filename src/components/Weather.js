
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Geocode from "react-geocode";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './MainPage.css'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import feels from '../assets/icons/feels.png'
import pressure from '../assets/icons/pressure.png'
import hum from '../assets/icons/humidity.png'
import prec from '../assets/icons/rainy.png'
import visi from '../assets/icons/visi.png'
import wind from '../assets/icons/wind.png'
export default function Weather(props) {
    const isDay = true
    const {is_day,feelslike_c,temp_c,humidity,precip_mm,pressure_in,vis_km,wind_kph} = props.data.current
    const {text,icon} = props.data.current.condition
    const {name, country,region} = props.data.location
    console.log(props.data);
    return (<>
        <div className="modalBox">
            <div className="mainData">
                <div className="above_main">
                    <h2 className="City_name" >{name}</h2>  {region}, {country}
                </div>
                <div className="day_temp">
                    <img src={icon}/>
                    <h1>{temp_c} <sup style={{ fontSize: '15px' }}>&#8451;</sup></h1>
                </div>
                <div className="belowMain">
                   <h3>{text}</h3> 
                </div>
            </div>

            <div className="subHead">
            <div className="Headlist">
            <img className="sub_icons" src={hum}/>
                    Humidity: {humidity} %
                </div>
                <div className="Headlist">
                <img className="sub_icons" src={feels}/>
                    Feels Like : {feelslike_c}<sup style={{ fontSize: '10px' }}>&#8451;</sup> 
                </div>
                <div className="Headlist">
                <img className="sub_icons" src={prec}/>
                    Precipitation: {precip_mm} mm
                </div>
            </div>
            <div className="subHead">
            <div className="Headlist">
            <img className="sub_icons" src={pressure}/>

                    Pressure: {pressure_in} 
                </div>
                <div className="Headlist">
                <img className="sub_icons" src={visi}/>
                    Visibility : {vis_km} km
                </div>
                <div className="Headlist">
                <img className="sub_icons" src={wind}/>
                    Wind Speed: {wind_kph} kph
                </div>
            </div>
        </div>
    </>)
}