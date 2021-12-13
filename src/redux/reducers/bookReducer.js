import books from '../../fakeData/books.json'

const initialState = {
    discover: books,
    readingList: [],
    finishList: []
}

function bookReducer(state = initialState, action){
    
    switch (action.type) {
        case 'add_book':
            {
                const newState = {...state, readingList: [...state.readingList, action.payload] }
                return newState;
            } 
        case 'remove_book':{
            
            const restBook ={...state, readingList: state.readingList.filter( book => book.id !== action.payload ) }
            return restBook;
        }         
    
        default:
            return state;
    }
}

export default bookReducer;