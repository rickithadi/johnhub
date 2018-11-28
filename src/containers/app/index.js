import { Route, Link ,NavLink} from 'react-router-dom';
import React from 'react';
import Home from '../home';
import About from '../about';
import Cats from '../cats';
import Initial from '../initial';
import Counter from '../counter';
import { Menu, Icon } from 'antd';
import { Layout, Card } from 'antd';

import { Row, Col } from 'antd';
import { Form,  Input, Button, Checkbox } from 'antd';

const { SubMenu } = Menu;
const FormItem = Form.Item;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
        authenticated:true
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
   handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    

    render() {
       const { getFieldDecorator } = this.props.form;
        return(
   
            <div style={{ background: '#ECECEC', padding: '30px', height:'100vh' }}>

    {!this.state.authenticated &&

     <Row type="flex" justify="space-around" align="middle">
     <Col span={10}>
     <Card style={{textAlign:'center'}}>
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
     </Form>
     </Card>
     </Col>
     </Row>
  }

    {this.state.authenticated &&

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
      <Menu.Item key="/avatar" style={{ textAlign: 'center' }}>
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
      {/* <Route exact path="/initial" component={Initial} /> */}
     <Route exact path="/counter" component={Counter} />
    </main></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
   </Layout>}
  </div>
    )}
}
// export default App;

export default Form.create()(App);
