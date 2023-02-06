// Import types
import { ADD_DECK } from '../types';

export const addDeck = (number=1) => {
    return {
        type: ADD_DECK,
        info: "Add card to deck is redux action",
        payload: number
    }
}