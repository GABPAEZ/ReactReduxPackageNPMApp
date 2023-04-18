import { ActionType } from "../action-types";
import { Action } from "../actions";



interface RepositoriesReducer {
    isLoading: boolean;
    error: string | null;
    data : string[];
}

const initialState = {
    isLoading: false,
    error:  null,
    data: []
}

const reducer = (state: RepositoriesReducer = initialState, action: Action ):RepositoriesReducer => { 
    
    switch (action.type) {
        // in the first case of search, we are doing a first step to search, then our store is set as follow at the starting
        case ActionType.SEARCH_REPOSITORIES:
            return { isLoading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { isLoading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { isLoading: true, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;
