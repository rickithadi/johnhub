import { combineReducers } from 'redux';
import counter from './counter';
import call from './call';
import cats from './cats';
import fuck from './fuck';
import quotes from './quotes';

export default combineReducers({
    counter,
    call,
    cats,
    fuck,
    quotes
});
