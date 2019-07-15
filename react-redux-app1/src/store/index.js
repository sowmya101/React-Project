import { createStore, applyMiddleware} from 'redux';
import reducers from '../reducer';


//const createStoreWithMiddleware = applyMiddleware()(createStore);

//export default createStoreWithMiddleware;


let store = createStore(reducers,applyMiddleware())

export default store