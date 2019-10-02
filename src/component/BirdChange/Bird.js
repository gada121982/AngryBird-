
import React , {Component} from 'react' ; 
import AngryBird1 from './img/angryBird1.png' ; 
import AngryBird2 from './img/angryBird2.png' ; 
import AngryBird3 from './img/angryBird3.png' ; 
import './Bird.css'
 class Bird extends Component{

    
    constructor(props){

        super(props); 
        this.state = ({
            imgUrl  : AngryBird1
        })
        this.changeimgUrl = this.changeimgUrl.bind(this) ; 
        
    } ; 

    changeimgUrl(){

     
        switch(this.state.imgUrl){
            case AngryBird1 :
                this.setState({
                    imgUrl  : AngryBird2
                });
               break; 
            case AngryBird2 :
                this.setState({
                    imgUrl  : AngryBird3
                });
                break;
            case AngryBird3 :
                this.setState({
                    imgUrl  : AngryBird1
                });
                break;

            default : 
            break ; 
        }
        
       
      
    }
   
    render(){
        return(
           
            <div className="Bird">
                <img src={this.state.imgUrl}></img>

                <div className="button-wrapp">
                   <button className="left" 
                   onClick={this.changeimgUrl} >
                     {"<"} 
                   </button>

                   <button className="right"
                   onClick={this.changeimgUrl}>
                       {">"}
                    </button>
                </div>
            </div>
        )
    }

      

    
}
export default Bird