import React from 'react';
import { Card } from '@material-ui/core';
import { Container } from '@mui/material';
import { Row } from 'react-bootstrap';
import headerImg from "../Images/bert.png";
import Button from '@mui/material/Button';

export const Card1 = () => {

  return (
    
    <Card style={{ maxWidth: 250, margin:120,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}>
    <Container>
      <Row>
        
      <img src={headerImg} alt="Header Img" style={{marginTop: 1, display:'flex',marginLeft:1,maxHeight:220, marginBottom:10, borderRadius:98}}/>

      <label style={{display:'block',textAlign:'center', fontWeight:20, fontSize:14}}>Git is a distributed version control system. Every dev has a working copy of the code. </label>
      
      <section className='card_design'>
      <Button className='cardbtn' variant="contained">Learn More...</Button>
      </section>

      </Row>
    </Container>
    </Card>
    
  );
};