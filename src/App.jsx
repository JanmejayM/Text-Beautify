import './App.css';
import DisplayText from './components/DisplayText';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast,ToastHeader,ToastBody,Spinner,Badge } from 'reactstrap';
import { useState } from 'react';


function App() {


 
  const [result,setResult]=useState("");
  const [show,setShow]=useState(false);

  return (

 

    <div className="App">

      <div className="header">

        <h1>
          Text Beautify
          <Badge>
           Paraphrasing Tool
          </Badge>
        </h1>
       
      </div>
      <div className='display-section-card'>
      <DisplayText setResult={setResult} setShow={setShow}/>
      
  {
            show  ?<Spinner color='info'>
            Loading...
          </Spinner>:
          <div style={{padding:'10px',justifyContent:'center',display:'flex'}}>
          <Toast isOpen={result!==""} className='bg-warning' >
          <ToastHeader toggle={()=>result!==""}>
            You can also write:
          </ToastHeader>
          <ToastBody>
            {result}
          </ToastBody>
        </Toast>
        </div>
  }

      </div>



   
  

  
</div>


  );
}

export default App;
