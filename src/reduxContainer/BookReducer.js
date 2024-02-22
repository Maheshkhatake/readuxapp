import { buybook } from "./BookTypes";

const initialState= {
    NumberOfBooks: 20
}

const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buybook: return{
            ...state,NumberOfBooks: state.NumberOfBooks-1
        }
        default: return state
    }

}

export default BookReducer;