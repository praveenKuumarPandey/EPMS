import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";
import {Link} from "react-router-dom";


// for sidebar menu
import { useState } from 'react';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { useAuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";


const { Sider } = Layout;


const { Header, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
    
  };
}




const items = [
  getItem('User Details', 'sub1', <UserOutlined />, [
    getItem('Home', '/',<AppstoreOutlined />),
    getItem('Profile', '/profile', <UserOutlined />),
    getItem('contact', '/contact', <UserOutlined />),
    getItem('about', '/about', <SettingOutlined />),
  ]),
  getItem('Design Team WorkSpace', 'sub2', <AppstoreOutlined />, [
    getItem('Design item 5', '5'),
    getItem('Design item 6', '6'),
    getItem('Design item 7', '7'),
    getItem('Design item 8', '8'),
  ]),

  getItem('Merch Team WorkSpace', 'sub3', <SettingOutlined />, [
    getItem('Merch 9', '9'),
    getItem('Merch 10', '10'),
    getItem('Merch 11', '11'),
    getItem('Merch 12', '12'),
  ]),
  getItem('Planing Team WorkSpace', 'sub4', <SettingOutlined />, [
    getItem('Planing 9', '13'),
    getItem('Planing 10', '14'),
    getItem('Planing 11', '15'),
    getItem('Planing 12', '16'),
  ]),
  getItem('Ecommerce WorkSpace', 'grp', <ShopOutlined />, [getItem('Option 17', '17'), getItem('Option 18', '18')]),
];



const App = () => {
  const navigate = useNavigate();
  const { user,setUser } = useAuthContext();
  // if(!user){
  //  navigate('/signin'); 
  // }

  const navigateTo = ({key}) => {
    if(key === 'signout'){
    // TODO: sign out feature here
    }else{
      console.log(key);
      navigate(key);
    }
    
    };


  const [collapsed, setCollapsed] = useState(false);


  return (

    <Layout>
    {user ? (
      <>
      <Sider className="siderComp" trigger={null} collapsible collapsed={collapsed}>
      <Button className="sideMenuTogelBtn" style={{ padding: 29, background: '#09172e' }}> {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {

        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}</Button>
      <Menu className="MenuComp"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
        defaultOpenKeys={['sub1']}
        onClick={navigateTo}

        items={items}
      />
    </Sider>
    <Layout >

      <Row gutter={[0, 32]}>
        <Col span={24}>

          <Header >
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
            <AppRoutes />
          </Content>
        </Col>
      </Row>
    </Layout>
  </>
    ) : (
      <>
      <Layout>

      <Row gutter={[0, 32]}>
        <Col span={24}>

          <Header>
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
          <AppRoutes />
          
          </Content>
        </Col>
      </Row>
    </Layout>
</>
    )}

      
    </Layout>
  );
};

export default App;
