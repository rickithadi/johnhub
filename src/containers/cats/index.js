import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchCats, receivedCats, requestCats} from '../../modules/cats';
import {fetchFucks, receivedFucks, requestFucks} from '../../modules/fuck';
import {fetchQuotes, receivedQuotes, requestQuotes} from '../../modules/quotes';
import { Card } from 'antd';

import { Row, Col } from 'antd';

class Cats extends React.Component{
    componentDidMount(){
       this.props.fetchQuotes();
       this.props.fetchFucks();
      this.props.fetchCats();

    }

    render(){
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>

                <Card >
                  <h2 style={{textAlign:'center'}}>{this.props.quote}
</h2>                 </Card>

              <Row type="flex" justify="space-around" align="middle">
                <Col span={4} >
             <img src={this.props.cat && this.props.cat}/>

                </Col>

            <Col span={4}> 
              <h2>{this.props.fuck && this.props.fuck}</h2> 
</Col>
               </Row>
            </div>
               )}
}
const mapStateToProps = ({ cats, fuck ,quotes}) => ({
    fuck: fuck.fuck.message ,
    cat: cats.cat,
    quote: quotes.quote.value
});
const mapDispatchToProps = dispatch =>
      bindActionCreators(
          {
              fetchCats,
            requestCats,
              receivedCats,
              fetchFucks,
              requestFucks,
              receivedFucks,
              fetchQuotes,
              requestQuotes,
              receivedQuotes
              // changePage: () => push('/about-us')
          },
          dispatch
      ) ;
export default connect(mapStateToProps,mapDispatchToProps)(Cats);
