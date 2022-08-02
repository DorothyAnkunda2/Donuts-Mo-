import './App.css';
import {Container, Row, Col, Image} from "react-bootstrap";
import Logo from "./assets/images/Logo.png";
import first from "./assets/images/2.jpeg"
import second from "./assets/images/7.jpeg"
import third from "./assets/images/8.jpeg"
import fourth from "./assets/images/9.jpeg"
import fifth from "./assets/images/10.jpeg"
import sixth from "./assets/images/12.jpeg"


function App() {
  return (
    <>
    <Container>
      <Row>
        <Col md={4}>
          <Image src={Logo} alt="logo" width={200} />
        </Col> 
        <Col md={4}>
          <h1 className='mt-4'>Donuts & Mo'</h1>
          <h1 className='text-center'><small>"The unbeatable taste"</small></h1>
        </Col>
      </Row>

      <Row className='mt-5'> 
        <Col md={4}>
         <Image src={first} alt="first" width={300} height={400}/>
        </Col>
        <Col md={4}>
        <Image src={second} alt="second" width={300} height={400} />
        </Col>
        <Col md={4}>
        <Image src={third} alt="third" width={300} height={400}/>
        </Col>
      </Row>

      <Row className='mt-5'> 
        <Col md={4}>
         <Image src={fourth} alt="fourth" width={300} height={400}/>
        </Col>
        <Col md={4}>
        <Image src={fifth} alt="fifth" width={300} height={400} />
        </Col>
        <Col md={4}>
        <Image src={sixth} alt="sixth" width={300} height={400}/>
        </Col>
      </Row>
          
    </Container>
    </>
  );
}

export default App;
