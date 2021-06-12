const ADD_PRODUCTS = "LIST_PRODUCTS"

interface Action {
  type:string,
  payload:any
}

export const initialProducts = {
  listProducts:[],
  name:'',
  price:'',
  image:''
}

export const productsReducer = (state = {}, action:Action) => {
    switch (action.type) {
      case ADD_PRODUCTS:
        return {
            ...state,
            listProducts:action.payload
        };
     
      default:
        return state;
    }
};