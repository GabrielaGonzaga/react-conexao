import logo1 from '../../assets/img/logo1.png';
import logo2 from '../../assets/img/logo2.png';
import { React, Component } from 'react';
import '../../assets/css/style.css';
import '../cadastro/cadastro';


// function getComboA(selectObject) {
//   var select = document.getElementById("select");
//   var formularios = document.querySelectorAll('.formulario');
  
//   select.onchange = function () {
//     for (var i = 0; i < formularios.length; i++) formularios[i].style.display = 'none';
//     var divID = select.options[select.selectedIndex].value;
//     var div = document.getElementById(divID);
//     div.style.display = 'block';
// };
// }


class cadastro extends Component{
  constructor(props){
      super(props);
      this.state = {
          value:'show',
          value:'hide',
          listaConsultas : [],
          nomeUsuario:'',
          email : '',
          senha : ''
      }
    }


    divstatus = (e) =>{
      this.setState({value: e.target.value});
   }

   
  //  escondeDiv = (e) => {
  //   this.setState(
  //    e =  document.getElementById("equi").style.display = "none"
  //   )};

    
  render(){

       
      // reapareceDiv =(b) => {
      //   var b = document.getElementById("dois")
      // dois.style.display = "block";
      // }

    return(

  //     <div className="maincontainer">
  //   <h1>Reactjs Therichpost</h1>
  //      <select onChange={this.divstatus}>
  //      <option value="show">Show Div</option>
  //      <option value="hide">Hide Div</option>
  //     </select>
  //    <div className={this.state.value}>Div is showing!!</div>
  //    <div className={this.state.value}>Div is showsjsjng!!</div>
  //    hhhh
  // </div>
     
      <div >
        <header className="menu">
          
        </header>

        <body>
          <div className="body">
          <div className="block">
            <div className="top" >
              <div>
                <img className="logo2" src={logo2} alt="Logo SP Medical Group"/>
              </div>
              
              <h2 id="h2" >Cadastro</h2>
            </div>
            
            <h3 id="h3" >Cadastro de salas ou equipamentos?</h3>
          <div className="sele">
          <select onChange={this.divstatus}  className="select">
            <option value="show">Sala</option>
            <option value="hide">Equipamento</option>
          </select>
          
          </div>
        <div>
          {/* ///////////////(1)////////////////////*/}          
          <div className={this.state.value} id="sala" >
              < div id="sal">
                  <form action="">
                  <input type="email" name="email" id="email"placeholder="Emaiaakal"/>
                  </form> 
                </div>
              
            </div>
        </div>

      <div  className={this.state.value}>
        {/* ///////////////(2)////////////////////      */}
      <div>

      </div>
        <div  id="equi" >
                <div class="input-field">
                  <input type="email" name="email" id="email"placeholder="Email"/>
                  <div className="linha"></div>
                </div>

                <div class="input-field">
                  <input type="email" name="email" id="email"placeholder="Email"/>
                  <div className="linha"></div>
                </div>

                <div class="input-field">
                  <input type="email" name="email" id="email"placeholder="Email"/>
                  <div className="linha"></div>
                </div>
              </div>
              <div className="teste">
                

</div>
  
      </div>
          </div> 

         
          
          </div>
        
        </body>

        
      </div>
    )
    
  };
  


}


export default cadastro;
