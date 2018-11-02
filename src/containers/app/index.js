import React from 'react'
import { Route, Link ,NavLink} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { Menu, Icon } from 'antd';
import { Layout } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const App = () => (
  <div>
    <Menu  mode="horizontal" theme="dark">
      <Menu.Item key="/home">
        <NavLink to="/">
          <Icon type="home" />
          <span>home</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/about">
        <NavLink to="/about-anus">
          <Icon type="about" />
          <span>about</span>
        </NavLink>
      </Menu.Item>
      
      <Menu.Item key="/notifications">
        <NavLink to="/vagene">
          <Icon type="notification" />
          <span>Notifications</span>
        </NavLink>
      </Menu.Item>
    </Menu>


    {/* <header> */}
    {/*   <Link to="/">Home</Link> */}
    {/*   <Link to="/about-us">About</Link> */}
    {/*   <Link to="/vagene">show bob</Link> */}
    {/* </header> */}

    {/* <Sider className="sidebar" width={280} style={{ background: '#fafafa' }}> */}
    {/*   <Menu className="sidebar" */}
    {/*   style={{ width: 280, background: '#fafafa', height: '90vh' }} */}
    {/*   defaultSelectedKeys={['1']} */}
    {/*   defaultOpenKeys={['sub1']} */}
    {/*   mode="inline"> */}
    {/*     <Menu.Item className="sidebar-item" key="1"> */}
    {/*       <Link to="/"> */}
    {/*         <Icon type="appstore" /> */}
    {/*         OVERVIEW */}
    {/*       </Link> */}
    {/*     </Menu.Item> */}
    {/*     <Menu.Item className="sidebar-item" key="2"> */}
    {/*       <Link to="/issues"> */}
    {/*         <Icon type="bars" /> */}
    {/*         ISSUES */}
    {/*       </Link> */}
    {/*     </Menu.Item> */}
    {/*     <Menu.Item className="sidebar-item" key="3"> */}
    {/*       <Link to="/calendar"> */}
    {/*         <Icon type="calendar" /> */}
    {/*         CALENDAR */}
    {/*       </Link> */}
    {/*     </Menu.Item> */}
    {/*     <Menu.Item className="sidebar-item" key="4"> */}
    {/*       <Link to="/settings"> */}
    {/*         <Icon type="setting" /> */}
    {/*         SETTINGS */}
    {/*       </Link> */}
    {/*     </Menu.Item> */}
    {/*   </Menu> */}
    {/* </Sider> */}
    {/* <main> */}
    {/*   <Route exact path="/" component={Home} /> */}
    {/*   <Route exact path="/about-anus" component={About} /> */}
    {/*   <Route exact path="/vagene" component={About} /> */}
    {/* </main> */}
  </div>
)

export default App
