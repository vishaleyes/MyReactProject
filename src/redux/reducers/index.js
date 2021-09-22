import { increment, decrement, fetching, submitFormData } from '../actions/about';

const Initial_State = {
    count : 0,
    count2: 0,
    isLoading: false,
    user: {
        firstname : 'Vishal',
        lastName : 'Panchal',
        age: 32
    }

}

const index = (state = Initial_State, action) => {
    console.log("action", action);
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1,
                count2: state.count + 1,
                isLoading: true
            }
        case decrement:

            return {
                ...state,
                count: state.count - 1,
                count2: state.count - 1,
                isLoading: true
            }
        case fetching:
            return {
                ...state,
                userData: action.data,
                isLoading: true
            }  
        case submitFormData:
             return {
                ...state,
                formData: action.data,
                isLoading: true 
             }      
        default:
            return state;
    }
}

export default index;