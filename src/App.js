import {Mostrador} from './components/Mostrador'
import icon1 from './images/icon1.png'
import {Mostrador2} from "./components/Mostrador2"
import icon2 from "./images/icon2.png"





function App() {
  return (
    <div>
    <Mostrador img={icon1}>{"Descrição de algo"}</Mostrador>
    <Mostrador2 img ={icon2} text= {"Descrição de algo 2"} title= {"Título"}></Mostrador2> 
    </div>
  );}

export default App;
