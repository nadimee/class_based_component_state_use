import React , {Component} from "react";
import './App.css'

class App extends Component {


    constructor(props) {
        super(props)
        this.state = {
            
            fullName:"Karim ben saleh",
            bio:"Karim 's age is 31 , he is a journalist from 2016", 
            imgSrc:"Karim.webp",
            profession:"journalist",
            shows:false,
            counter : 0
        }

      }

      ShowHidePar = ()=>this.state.shows===false?this.setState({shows:true}) :this.setState({shows:false}) ;

       ShowHide=() =>{
          this.ShowHidePar();
          let target = document.getElementById("target");
          (this.state.shows === false) ? target.style.display = "block":target.style.display = "none";
                     }
                     
render(){
  

return(
    <div style={{textAlign:"center",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"12px",backgroundColor:"rgb(0, 19, 20)",margin:"3%",borderRadius:"2px",paddingTop:"2%",paddingBottom:"2%",color:"rgb(32, 47, 83)"}}>
       
       <button onClick={this.ShowHide} style={{color:"rgb(32, 47, 83)",backgroundColor:"rgb(253, 254, 200)"}}>Show content</button>
       <div id="target" style={{display:"none"}}>
       <h1>{this.state.fullName}</h1>
       <h1>{this.state.bio}</h1>
       <h1>{this.state.profession}</h1>
       <img src={this.state.imgSrc} alt='Karim' style={{width:"240px",height:"350px",borderRadius:"3px"}} />
       <p>Time interval since the last component was mounted : {this.state.counter}</p>
       </div>
    </div>
)
}

componentDidMount(){

this.interval = setInterval(()=>this.setState({counter:this.state.counter+1}),1000);

}

}


export default App;

