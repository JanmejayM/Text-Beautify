import './App.css';
import DisplayText from './components/DisplayText';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast,ToastHeader,ToastBody } from 'reactstrap';
import { useState } from 'react';


function App() {


 
  const [result,setResult]=useState("");
  return (
    <div className="App">
      <DisplayText setResult={setResult}/>


      <div className="text-center" style={{marginTop:"50px"}}>
      <div>
  
  <br />
  <br />
  <Toast isOpen={result!==""}>
    <ToastHeader toggle={()=>result!==""}>
      You can also write:
    </ToastHeader>
    <ToastBody>
      {result}
    </ToastBody>
  </Toast>
</div>
</div>
    </div>
  );
}

export default App;
