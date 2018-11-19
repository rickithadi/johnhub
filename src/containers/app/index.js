import { Route, Link ,NavLink} from 'react-router-dom';
import React from 'react';
import Home from '../home';
import About from '../about';
import Cats from '../cats';
import Counter from '../counter';
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
        <NavLink to="/about-us">
          <Icon type="info-circle" />
          <span>about</span>
        </NavLink>
      </Menu.Item>
      
      <Menu.Item key="/notifications">
        <NavLink to="/counter">
          <Icon type="plus" />
          <span>Counter</span>
        </NavLink>
      </Menu.Item>


      <Menu.Item key="/cats">
        <NavLink to="/cats">
          <Icon type="smile" />
          <span>cats</span>
        </NavLink>
      </Menu.Item>
      
    </Menu>


    {/* <header> */}
    {/*   <Link to="/">Home</Link> */}
    {/*   <Link to="/about-us">About</Link> */}
    {/*   <Link to="/vagene">show bob</Link> */}
    {/* </header> */}
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/counter" component={Counter} />
    </main>
  </div>
)

export default App
