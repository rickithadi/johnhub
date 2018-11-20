import React from 'react';
import { connect } from 'react-redux';
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    multiply
} from '../../modules/counter';
import { bindActionCreators } from 'redux';
import { fetchPosts ,requestPosts, receivedPosts} from '../../modules/call';
import { Row, Col } from 'antd';
import { Button ,Select } from 'antd';


class Counter extends React.Component {
  
       render() {
           const Option = Select.Option;
          
        return (
            <div>
              <Select 
                size='large'
                defaultValue="singapore"
                style={{ width: 200 }}
                onChange={(e)=> this.props.fetchPosts(e)}
              >
                <Option value="singapore">singapore</Option>
                <Option value="malaysia">malaysia</Option>
              </Select>
              <h2>Counter</h2>

              <div>
                <span>{this.props.count}</span>
              </div>

              <button onClick={()=>this.props.fetchPosts('all')}>chuuu</button>
              <br/>
              {this.props.json && this.props.json.map((i)=>
     <div className="sub" key={i}>

       <hr/>
       <Row type="flex" justify="center">

       <Col span={10}>{i}</Col>

       <Col span={2}>
         <Button type='danger' onClick={this.props.decrement}>-</Button>
         <Button type='primary' onClick={this.props.increment}>+</Button>
                                                        </Col>
                                                      </Row>
                                                        

                                                      <hr/></div>
                                   )}
           </div>
        );
    }
}
const mapStateToProps = ({ counter, call }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
    
    json: call.json
});
const mapDispatchToProps = dispatch =>
      bindActionCreators(
          {
              increment,
              multiply,
              incrementAsync,
              decrement,
              decrementAsync,
              fetchPosts,
              requestPosts,
              receivedPosts
              // changePage: () => push('/about-us')
          },
          dispatch
      );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
