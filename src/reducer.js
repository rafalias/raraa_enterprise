export const initialState = {
    basket:[],
    user:null
};

//reducer is WAY to dispatch action into data layer(push data) and every component also can access from data layer(pull data)

//Selector
//reduce is a function iteraTe thru Basket tally up the total
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount,0);

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketitem) => basketitem.id === action.id
                );
                let newBasket = [...state.basket];
                if ( index >= 0){
                    newBasket.splice(index,1)
                }
                else{
                    console.warn(`cant remove (id: ${action.id}`)
                }

                return{
                    ...state,
                    basket: newBasket
                }
        case "EMPTY_BASKET":
                return{
                    ...state,
                    basket:[]
                }

        default: 
            return state;
    }
}

export default reducer;