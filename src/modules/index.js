import { combineReducers } from 'redux'
import counter from './counter'
import call from './call'

export default combineReducers({
    counter,
    call
})
