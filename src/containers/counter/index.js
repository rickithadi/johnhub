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

class Counter extends React.Component {
    // state = { count: 0 }
       render() {
        return (
            <div>
              <h2>Counter</h2>
              {this.props.json && this.props.json}
              <div>
                <button onClick={this.props.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.increment}>+</button>
              </div>

              <button onClick={this.props.fetchPosts}>fetchuuu</button>
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//         count: state.count
//     };
// }
// export default connect(mapStateToProps)(Counter);


// export default Counter;
const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
})
const mapCalls=({call})=>({
    json: call.json
})

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
      )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
