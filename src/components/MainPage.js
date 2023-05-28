import React, { useState } from "react";
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import './MainPage.css'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Weather from "./Weather";



export default function MainPage() {
    const [cityName, setName] = useState("")
    const [load, setLoad] = useState(false)
    const [data, setData] = useState({})
    const [isdata, setIsdata] = useState(false)
  
    const Weaapi = "d848f689797f4776bbb201422232705"
    const Handlesubmit = async () => {
        setLoad(true)
        setData({})
        setIsdata(false)
        try {
            const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${Weaapi}&q=${cityName}`)
            // console.log(res.data);
            setData(res.data)
            setIsdata(true)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
        setLoad(false)
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "city") {
            setName(value);
        }
    }
    
   
    // console.log(cityName);
    return (
        <>
            <header className="App-header">
                <h2>Weather App</h2>
            </header>
            {
                !load ?
                    <div className='main_page'>
                        <div className="search_bar">
                            
                            <TextField id="city" label="City" onChange={(e) => handleInputChange(e)} variant="standard" />
                            <Button variant="contained" onClick={Handlesubmit} >Search</Button>
                        </div>
                        {isdata && <Weather data={data} />}
                    </div> : <CircularProgress />
            }
        </>
    )
}