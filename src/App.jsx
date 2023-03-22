import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";

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

const { Sider } = Layout;


const { Header, Content } = Layout;

function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  };
}
const items = [
  getItem('User Details', 'sub1', <UserOutlined />, [
    getItem('User item 1', '1', null, null, null, '/profile'),
    getItem('User item 2', '2'),
    getItem('User item 3', '3'),
    getItem('User item 4', '4'),
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

  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout>
      <Sider className="siderComp" trigger={null} collapsible collapsed={collapsed}>
        <Button className="sideMenuTogelBtn" style={{ padding: 29, background: '#09172e' }}> {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {

          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}</Button>
        <Menu className="MenuComp"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}

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
    </Layout>
  );
};

export default App;
