import React from 'react'
import './index.css'
import {API} from '../config'

class Search extends React.Component{
    constructor(){
        super()
       // this.textInput = React.createRef();
        this.state={
            city:'Yerevan'
         }
    }
    // focusTextInput=()=> {
    //     // Установим фокус на текстовое поле с помощью чистого DOM API
    //     // Примечание: обращаемся к "current", чтобы получить DOM-узел
    //     this.textInput.current.focus();
    //   }

      handleFetch(){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${API}&units=metric`)
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
    componentDidMount(){
      this.handleFetch()
        
    }
    
    componentDidUpdate(x,prevState){
        if(this.state.city!==prevState.city){
            this.handleFetch()
        }
    }
    addCity=(e)=>{
        e.preventDefault();
        this.setState({
            city:e.target.value
         })
         console.log(this.state.city);
    }
    handleOnChange=(e)=>{
        const {name,value}=e.target
       
    console.log(value);
    }
    render(){
      return (  <div>
          <form onSubmit={this.addCity}>
            <input type='text' placeholder='Choose the city' name='city' onChange={this.handleOnChange}/>
             {/* ref={this.textInput} */}
            <input type='button' value='Search' name='sumbit' />
            {/* onClick={this.focusTextInput} */}
            </form>
            
        </div>
      )
    }
}
export default Search