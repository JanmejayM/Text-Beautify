
import {Row,Col,Card,CardTitle,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaDeleteLeft } from "react-icons/fa6";

import { LuScrollText } from "react-icons/lu";


import axios from 'axios';

import { useState } from 'react';
const DisplayText=({setResult,setShow})=>{

  const [text,setText]=useState("");

const clearTest=()=>{
  setText("");
  setShow(false);
  setResult("");
}

const  rewriterApi=async ()=>{


  const options = {
    method: 'POST',
    url: 'https://paraphrasing-and-rewriter-api.p.rapidapi.com/rewrite-light',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '95b37631a7msh36b5b32cccf7eaap1bfe02jsnfb97bceeeac5',
      'X-RapidAPI-Host': 'paraphrasing-and-rewriter-api.p.rapidapi.com'
    },
    data: {
      from: 'en',
      text:text
    }
  };
  
  try {
    setShow(true);

    const response = await axios.request(options);

    setResult(response.data);
    setShow(false);

  } catch (error) {
    setShow(false);

    setResult("Error Occured");
  }
}
  

const handleChange=(e)=>{
  setText(e);

}

    return(
        <div>

          <Row>
            <Col >
              <Card body>
                <CardTitle tag="h5">
                  Enter the Sentence below:
                </CardTitle>
                <Card className='mx-5'>
                  <textarea cols="10" rows="10" onChange={(e) => handleChange(e.target.value)} value={text}
          ></textarea>

                </Card>

                <Row>
                  <Col m="6">
                  <Button onClick={rewriterApi} disabled={text===""} color="info" size='lg'><LuScrollText/>Paraphrase</Button>
                  </Col>
                  <Col m="6">
                  <Button onClick={clearTest} disabled={text===""} color="danger" size='lg'> Clear Text <FaDeleteLeft/></Button>

                  </Col>
                </Row>
                

              
              </Card>
            </Col>
          
          </Row>


        </div>
    );
}

export default DisplayText;


