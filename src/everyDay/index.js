import React from 'react'
import './index.css'
import {API} from '../config'


class EveryDay extends React.Component {
    constructor() {
        super()
        this.state = {
            weatherResult:[],
            icon:'',
            wind:'',
            city:'London'
        }

    }
    handleFetch=()=>{
        const {city}=this.state
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
       
         .then((resp) => {
        console.log(resp);
            return resp.json()
         })
        .then((data) => {
            console.log(data);
            this.setState({
                weatherResult: data.main,
                icon:data.weather[0].icon,
                wind:data.wind
               // loading: false,
              })
            
        })
    }
    componentDidMount(){
        this.handleFetch()
    }
    
    handleOnChange=(e)=>{
        const {name,value}=e.target
       this.setState({
           city:value
       })
    console.log(value);
    }
    handleCity=(e)=>{
       
        e.preventDefault();
       
        this.handleFetch()
         
    }
    render() {
        const {weatherResult ,icon ,wind}=this.state
        return (
            <div className='dayWeather'>
               
            <input type='text' placeholder='Choose the city' name='city' onChange={this.handleOnChange} />
             {/* ref={this.textInput} */}
         <input type='button' value='Search' name='sumbit' onClick={this.handleCity} /> 
            {/* onClick={this.focusTextInput} */}
            
          
                <div className='cityDiv'>
                        Weather in Yerevan
                        
                    </div >
                    <div className="mainDayWeather">
                        <div className='weatherLeftDiv'>
                      <span>Temp:{weatherResult.temp} &deg;C</span> 
                       <span>
                              <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt=''/>
                         </span>
                         </div>
                         <div className='weatherRightDiv'>
                           <div>Pressure:{weatherResult.pressure}</div> 
                           <div>Feels like: {weatherResult.feels_like}</div> 
                           <div>Wind speed:{wind.speed}</div>
                         </div>
                      </div>
                
                
            </div>
        )
    }
}
export default EveryDay