import React from 'react'
import './index.css'
import {API} from '../config'

class WeatherHeader extends React.Component{
    constructor(){
        super()
        this.state={
            weatherResult:[],
            isClicked:false,
            city:'Yerevan',
         }
    }
    componentDidMount(){
        const {city}=this.state
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=metric`)
         .then((resp) => {
        console.log(resp);
            return resp.json()
         })
        .then((data) => {
            console.log(data.list);
            this.setState({
                weatherResult: data.list,
               // loading: false,
              })
            
        })
        
    }
    handleClick=()=>{
        this.setState({
            isClicked :!this.state.isClicked
        })
    }
    
    render(){
        const {weatherResult,isClicked}=this.state
      ///  http://openweathermap.org/img/wn/{result.weather[0].icon}@2x.png
       
        return (
            <div className='forecastDiv'>
                 
                <div>Forecast for a day</div>
              <div className='fiveDaysForecast'>{weatherResult.slice(0,8).map((result,index)=>{
        return <span key={index} className='tempSpan'>
         
          <span>{result.dt_txt.slice(6,10)}</span>
          <span>{result.dt_txt.slice(10,13)}</span>
         
          <span> <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png` }alt=''/></span>
          <span>{Math.ceil(result.main.temp)}&deg;C</span>
           </span> })}
                  </div>    

                  <div onClick={this.handleClick}>Forecast for 5 days</div>{isClicked &&
                <div className='fiveDaysForecast' >
                {weatherResult.map((result,index)=>{
        return <span key={index} className='tempSpan'>
          {/* <span className='tempSpan'>{Math.ceil(result.main.temp_min)} {Math.ceil(result.main.temp_max)}   </span>   */}
          <span>{result.dt_txt.slice(6,10)}</span>
          <span>{result.dt_txt.slice(10,13)}</span>
         
          <span> <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png` }alt=''/></span>
          <span>{Math.ceil(result.main.temp)}&deg;C</span>
           </span> })}
                </div>}
    
            </div>
        )
    }
}

export default WeatherHeader