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

    // const App = () => (

class App extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        return(
   
  <div>
    <Layout style={{ minHeight: '100vh' }}>
    <Sider
      style={{ background: '#fff' }}
    collapsible
      collapsed={this.state.collapsed}
      onCollapse={this.onCollapse}
    >
      <br/>
      <br/>
      
    <Menu theme="light"  mode="inline" >
      <Menu.Item key="/home" style={{ textAlign: 'center' }}>
        <NavLink to="/">
          <Icon type="smile" theme="outlined" style={{ textAlign: 'center' }} />
        </NavLink>
      </Menu.Item>

      <br/>

      <Menu.Item key="/home">
        <NavLink to="/">
          <Icon type="home" theme="twoTone" />
          <span>home</span>
        </NavLink>
      </Menu.Item>

      <hr/>

      <Menu.Item key="/about">
        <NavLink to="/about-us">
          <Icon type="info-circle" theme="twoTone" />
          <span>Track</span>
        </NavLink>
      </Menu.Item>
      
      <hr/>

      <Menu.Item key="/counter">
        <NavLink to="/counter">
          {/* <Icon type="plus" /> */}
          <Icon type="fund" theme="twoTone" />
          <span>Overview</span>
        </NavLink>
      </Menu.Item>

      <hr/>

      <Menu.Item key="/cats">
        <NavLink to="/cats">
          <Icon type="smile" theme="twoTone" />
          <span>Settings</span>
        </NavLink>
      </Menu.Item>
      
    </Menu>

    </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
        <br/>
        <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
             
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/counter" component={Counter} />
    </main></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
</Layout>
  </div>
    )}
}
export default App

