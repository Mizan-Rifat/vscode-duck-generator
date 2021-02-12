`import { postAction, getAction } from "./actions";

//urls

const fetch_${text.toLowerCase()}_url = (id)=>\`/api/\`;
const add_${text}_url = \`/api/\`;
const delete_${text}_url =(id)=> \`/api/\`;
const update_${text}_url = (id)=>\`/api/\`;


//actions

const ${text.toUpperCase()}_FETCHED = 'pes/${text.toLowerCase()}/${text.toLowerCase()}_fetched';
const ${text.toUpperCase()}_ADDED = 'pes/${text.toLowerCase()}/${text.toLowerCase()}_added';
const ${text.toUpperCase()}_DELETED = 'pes/${text.toLowerCase()}/${text.toLowerCase()}_deleted';
const ${text.toUpperCase()}_UPDATED = 'pes/${text.toLowerCase()}/${text.toLowerCase()}_updated';

const LOADING_TRUE = 'pes/${text.toLowerCase()}/loading_true';
const LOADING_FALSE = 'pes/${text.toLowerCase()}/loading_false';
const FETCHING_TRUE = 'pes/${text.toLowerCase()}/fetching_true';
const FETCHING_FALSE = 'pes/${text.toLowerCase()}/fetching_false';
const SET_ERRORS = 'pes/${text.toLowerCase()}/set_errors';

// reducers

const initState = {
    fetching:true,
    loading:false,
    ${text.toLowerCase()}:[],
    error:{},
};

export default (state=initState,action)=>{
    switch (action.type) {
        case ${text.toUpperCase()}_FETCHED:
            
            return {
                ...state,
                fetching:false,
                loading:false,
                ${text.toLowerCase()}:action.payload,
                
            }

        case ${text.toUpperCase()}_ADDED:
            
            return {
                ...state,
                loading:false,
                ${text.toLowerCase()}:[...state.${text.toLowerCase()},action.payload],
                
            }
        case ${text.toUpperCase()}_UPDATED:
            
            return {
                ...state,
                loading:false,
                ${text.toLowerCase()}:state.${text.toLowerCase()}.map(item=>item.id == action.payload.id ? action.payload : item),
                
            }
        case ${text.toUpperCase()}_DELETED:
            
            return {
                ...state,
                loading:false,
                ${text.toLowerCase()}:state.${text.toLowerCase()}.filter(item => item.id != action.payload),
                
            }
        case LOADING_TRUE:
            
            return {
                ...state,
                loading:true
            }
        case LOADING_FALSE:
            
            return {
                ...state,
                loading:false
            }
        case FETCHING_TRUE:
            
            return {
                ...state,
                fetching:true
    
            }
        case FETCHING_FALSE:
            
            return {
                ...state,
                fetching:false,
            }
        case SET_ERRORS:
            
            return {
                ...state,
                loading:false,
                fetching:false,
                error:action.payload
            }
    
        default:
            return state;
    }
}

// action_creators

export const ${text.toLowerCase()}Fetched = (data) =>{
    return {
        type:${text.toUpperCase()}_FETCHED,
        payload:data
    }
}

export const ${text.toLowerCase()}Updated = (data) =>{
    return {
        type:${text.toUpperCase()}_UPDATED,
        payload:data
    }
}
export const ${text.toLowerCase()}Deleted = (id) =>{
    return {
        type:${text.toUpperCase()}_DELETED,
        payload:id
    }
}
export const ${text.toLowerCase()}Added = (data) =>{
    return {
        type:${text.toUpperCase()}_ADDED,
        payload:data
    }
}

export const setErrors = (error) =>{
    return {
        type:SET_ERRORS,
        payload:error
    }
}

export const fetch${text.toLowerCase()} = () => (dispatch) => {
   
    const url = fetch_${text.toLowerCase()}_url;
    const actions={
        loading:{type:FETCHING_TRUE},
        success:${text.toLowerCase()}Fetched,
        error:setErrors
    }
    return getAction(actions,url,dispatch);
}

export const add${text.toLowerCase()} = (newData) => (dispatch) => {
    
    const url = add_${text}_url;
    const actions={
        loading:{type:LOADING_TRUE},
        success:${text.toLowerCase()}Added,
        error:setErrors
    }
    return postAction(actions,url,newData,dispatch);
}

export const update${text.toLowerCase()} = (newData) => (dispatch) => {

    const url = update_${text}_url();
    const actions={
        loading:{type:LOADING_TRUE},
        success:${text.toLowerCase()}Updated,
        error:setErrors
    }
    return postAction(actions,url,newData,dispatch,'put');
}

export const delete${text.toLowerCase()} = (id) => (dispatch) => {

    const url = delete_${text}_url(id);
    const actions={
        loading:{type:LOADING_TRUE},
        success:${text.toLowerCase()}Deleted,
        error:setErrors
    }
    return postAction(actions,url,{},dispatch,'delete');
}
`