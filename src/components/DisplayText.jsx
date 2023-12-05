
import {Row,Col,Card,CardTitle,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import { useState } from 'react';
const DisplayText=({setResult})=>{

  const [text,setText]=useState("");

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
    const response = await axios.request(options);
    setResult(response.data);
  } catch (error) {
    setResult(error);
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
                  Enter the Sentence below: {text}
                </CardTitle>
                <Card className='mx-5'>
                  <textarea cols="10" rows="10" onChange={(e) => handleChange(e.target.value)}
          ></textarea>

                </Card>
                <Button onClick={rewriterApi}>Paraphrase</Button>
              
              </Card>
            </Col>
          
          </Row>


        </div>
    );
}

export default DisplayText;


