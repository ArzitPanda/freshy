import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FileConvtLogo from "./assets/images.png"
import { Row, Col, Button, Typography } from 'antd';
import './App.css'
import Applayout from './Applayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Applayout>
    <section className="bg-white">
      <Col justify="center" align="middle" style={{ height: '80vh' }}>
      <Col >
          {/* Render your HeroImage component here */}
          <img src={FileConvtLogo}/>
        </Col>
        <Col >
          <Typography.Title level={1}>
            Your Catchy Headline Here
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 20 }}>
            A compelling description of your product or service that engages visitors.
          </Typography.Paragraph>
          <Button type="primary" >Get Started</Button>
        </Col>
      
      </Col>
    </section>
    </Applayout>
    </>
  )
}

export default App
