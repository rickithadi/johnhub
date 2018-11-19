import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchCats, receivedCats, requestCats} from '../../modules/cats';

class Cats extends React.Component{
    render(){
        return (
            <div>
      <h1>CATTE Page</h1>
      <p>Did you get here via Redux?</p>
              <button onClick={()=>this.props.fetchCats()}>pussy</button>
             <img src={this.props.cat && this.props.cat}/>
              {/* <ImageLoader file={this.props.cat && this.props.cat}/> */}
            </div>
               )}
}
const mapStateToProps = ({ cats }) => ({
    
    cat: cats.cat
})
const mapDispatchToProps = dispatch =>
      bindActionCreators(
          {
              fetchCats,
              requestCats,
             receivedCats
              // changePage: () => push('/about-us')
          },
          dispatch
      ) ;
export default connect(mapStateToProps,mapDispatchToProps)(Cats);
