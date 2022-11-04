import React from 'react';
import ReusableButton from './Reusable_btn'
import CardComponent from './simple_card'
import { Container, Row,Col } from 'react-bootstrap';
import headerImg from "../Images/bert.png";

class ReusableComponents extends React.Component {
  
  onClick() {
    console.log("Button was clicked");
  }

  render() {
    return(
   
      <Container>
        <Row>
          <Col>
          <CardComponent 
        // cardColClass={"col-sm-3"}
        // cardBorder={"card border-default mx-1"}
        // cardTitle={"First Card"}
        cardText={"Git is a distributed version control system. Every dev has a working copy of the code." }
        cardStyle={{ maxWidth: 240, margin:60,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}
        image={<img src={headerImg} alt="Header Img" style={{marginTop: 10, display:'flex',maxHeight:150, marginBottom:10, borderRadius:50,width:240}}/>}
    > 

<a href="https://www.google.com/" style={{ textDecoration: 'none'}}>
<ReusableButton className={"cardbtn"} onClick={this.onClick} ></ReusableButton>
</a>
   
    </CardComponent>
          </Col>
          
          <Col>
          <CardComponent 
        // cardColClass={"col-sm-3"}
        // cardBorder={"card border-info mx-1"}
        // cardTitle={"Second Card"}
        cardText={"Sample Card 2" }
        cardStyle={{ maxWidth: 250, margin:120,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}
    > 
    <ReusableButton className={"btn btn-secondary"} onClick={this.onClick} >
     
    </ReusableButton>
    </CardComponent>
          </Col>
          
          <Col>
          <CardComponent 
        // cardColClass={"col-sm-3"}
        // cardBorder={"card border-primary mx-1"}
        // cardTitle={"Third Card"}
        cardText={"Sample Card 3" }
        cardStyle={{ maxWidth: 250, margin:120,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}
    > 
    <ReusableButton className={"btn btn-info"} onClick={this.onClick} >
      
    </ReusableButton>
    </CardComponent>
          </Col>
        </Row>
     





        <Row>
          <Col>
          <CardComponent 
        // cardColClass={"col-sm-3"}
        // cardBorder={"card border-default mx-1"}
        // cardTitle={"First Card"}
        cardText={"Git is a distributed version control system. Every dev has a working copy of the code." }
        cardStyle={{ maxWidth: 250, margin:60,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}
        image={<img src={headerImg} alt="Header Img" style={{marginTop: 10, display:'flex',marginLeft:10,maxHeight:150, marginBottom:10, borderRadius:75}}/>}
    > 

<a href="https://www.google.com/" style={{ textDecoration: 'none' }}>
<ReusableButton className={"cardbtn"} onClick={this.onClick} ></ReusableButton>
</a>
   
    </CardComponent>
          </Col>
          
          <Col>
          <CardComponent 
        // cardColClass={"col-sm-3"}
        // cardBorder={"card border-info mx-1"}
        // cardTitle={"Second Card"}
        cardText={"Sample Card 2" }
        cardStyle={{ maxWidth: 250, margin:120,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}
    > 
    <ReusableButton className={"btn btn-secondary"} onClick={this.onClick} >
     
    </ReusableButton>
    </CardComponent>
          </Col>
          
          <Col>
          <CardComponent 
        // cardColClass={"col-sm-3"}
        // cardBorder={"card border-primary mx-1"}
        // cardTitle={"Third Card"}
        cardText={"Sample Card 3" }
        cardStyle={{ maxWidth: 250, margin:120,maxHeight:400,borderRadius:50,backgroundColor:'#D9D9D9'}}
    > 
    <ReusableButton className={"btn btn-info"} onClick={this.onClick} >
      
    </ReusableButton>
    </CardComponent>
          </Col>
        </Row>

    </Container> 
    )
  }
}
export default ReusableComponents;