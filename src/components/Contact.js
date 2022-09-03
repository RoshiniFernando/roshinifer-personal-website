import { Container } from '@mui/material';
import * as React from 'react';
import { Email } from './email';
import { Row , Col} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import headerImg from "../Images/chatt.png";


const Contact = () => {
    return (
      <Container>
        <Row>
          <Col xs={10} md={5} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h1  style={{marginTop: -120,position:"absolute",marginLeft:20}}>Let’s have a chat!</h1>           
                  <img src={headerImg} alt="Header Img" style={{marginTop: 220, display:'flex',marginLeft:40}}/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col>
          <Email/>
          </Col>
        </Row>
      </Container>
    );
  };
  export default Contact;