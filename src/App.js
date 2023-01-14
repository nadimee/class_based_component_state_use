import React , {Component} from "react"


class App extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
            
            fullName:"Karim ben saleh",
            bio:"Karim 's age is 31 , he is a journalist from 2016", 
            imgSrc:"Karim.webp",
            profession:"journalist",
            shows:false
        }
      }

render(){

return(
    <div>
       <button>Show content</button>
       <h1>{this.state.fullName}</h1>
       <h1>{this.state.bio}</h1>
       <h1>{this.state.profession}</h1>
       <img src={this.state.imgSrc} alt='Karim' />
    </div>
)
}


}


export default App;

