import React, { useContext } from 'react'
import { Menu, Row, Col, Avatar, Slider, Layout } from 'antd';
import { HomeOutlined, FileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import UserInfo from './Components/ui/UserInfoCard';
import { Context } from './Context/AppProvider';
import { Link } from "react-router-dom";
const Applayout = ({children}) => {

const data = useContext(Context)

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
    const { Sider, Content ,Header} = Layout;
    const {Item} =Menu;
  return (
  
       <Layout >
      
    <Sider collapsible style={{backgroundColor:'white'}}  collapsed={data.isCollapsed} onCollapse={()=>{data.setIsCollapsed(!data.isCollapsed)}} >
   <UserInfo userEmail={'demo@gmail.com'} username={'john doe'}/>
        <Menu mode="vertical">
          <Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
          </Item>
          <Item key="files" icon={<FileOutlined />}>
            Files
          </Item>
          <Item key="jobs" icon={<SolutionOutlined />}>
           <Link to="/jobs">Jobs</Link>
          </Item>
        </Menu>
        
     
</Sider> <Layout >

<Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor:'whitesmoke'
        }}
      >
        <div className="demo-logo" />
      
      </Header>
        <Content >
          <div
            
          
          >
      
           
            {children}
          
          </div>
        </Content>
      </Layout></Layout>
  )
}

export default Applayout