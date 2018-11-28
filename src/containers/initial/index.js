import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchCats, receivedCats, requestCats} from '../../modules/cats';
import {fetchFucks, receivedFucks, requestFucks} from '../../modules/fuck';
import {fetchQuotes, receivedQuotes, requestQuotes} from '../../modules/quotes';
import { Card } from 'antd';

import { Row, Col } from 'antd';

class Initial extends React.Component{
    

    render(){
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <h1>anus</h1>
                            </div>
               )}
}
// const mapStateToProps = ({ cats, fuck ,quotes}) => ({
//     fuck: fuck.fuck.message ,
//     cat: cats.cat,
//     quote: quotes.quote.value
// });
// const mapDispatchToProps = dispatch =>
//       bindActionCreators(
//           {
//               fetchCats,
//             requestCats,
//               receivedCats,
//               fetchFucks,
//               requestFucks,
//               receivedFucks,
//               fetchQuotes,
//               requestQuotes,
//               receivedQuotes
//               // changePage: () => push('/about-us')
//           },
//           dispatch
//       ) ;
// export default connect(mapStateToProps,mapDispatchToProps)(Initial);
export default (Initial);
