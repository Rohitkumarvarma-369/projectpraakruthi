import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import { signInWithGoogle, success_auth_temp } from "./services/firebase";

const App = () => {
  console.log(success_auth_temp);
  return(
    <div className="main-div">
      {success_auth_temp ? (
        <h1>subscribed successfully</h1>
      ) : (
        <div className="card-div">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" />
            <Card.Body>
            <Card.Title><h1 className="main-title">Praakruthi</h1></Card.Title>
              <Card.Text>
                To subscribe to the hour to hour weather updates from
                the best in the industry, directly to your emails. Click on the button below
                and select the email you want the updates to. <span style={{color: "black", fontSize:"12px"}}>Note: If you can't find the mail in inbox, please check
                your spam folder too.</span>
              </Card.Text>
              <Button variant="success" onClick={signInWithGoogle}>Click here to subscribe</Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )


}

export default App;
