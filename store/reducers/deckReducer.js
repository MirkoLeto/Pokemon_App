// Import types. 
import { ADD_DECK } from '../types.js';
const deckInitialState = {
    numberOfCard: 0
}
const deckReducer = (state = deckInitialState, action) => {
    switch(action.type){
        case ADD_DECK:
            return {
               ...state,
               // TODO: add deck
               numberOfCard: state.numberOfCard + 1
            }
        default:
            return state;
    }
}
export default deckReducer;