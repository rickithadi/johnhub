import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchCats, receivedCats, requestCats} from '../../modules/cats';
import {fetchFucks, receivedFucks, requestFucks} from '../../modules/fuck';
import {fetchQuotes, receivedQuotes, requestQuotes} from '../../modules/quotes';

class Cats extends React.Component{
    render(){
        return (
            <div>
      <h1>CATTE Page</h1>
      <p>Did you get here via Redux?</p>
              <button onClick={()=>this.props.fetchCats()}>pussy</button>
             <img src={this.props.cat && this.props.cat}/>

              <button onClick={()=>this.props.fetchFucks()}>fuck</button>
              {this.props.fuck && this.props.fuck}
              <hr/>  
              <button onClick={()=>this.props.fetchQuotes()}>fuck</button>
              {this.props.quote && this.props.quote}
              
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
