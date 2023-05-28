export const filterReducer=(filterState,action)=>{
    switch(action.type){
        case "Sort-Filter":
            return {...filterState,Sort:action.payload}  
        case "Rating-Filter":
            return {...filterState,Rating:action.payload}    
        case "Price-Filter":
            return {...filterState, PriceRange:action.payload}           
        case "Category-Filter":
            return{...filterState,Category:filterState?.Category.find((category)=>category===action.payload) ? filterState?.Category.filter(genre=>genre!==action.payload) : [...filterState?.Category,action.payload]}

            case "ProductType-Filter":
                return{...filterState,ProductType:filterState?.ProductType.find((item)=>item===action.payload) ? filterState?.ProductType.filter(genre=>genre!==action.payload) : [...filterState?.ProductType,action.payload]}
       
            

        case "Toggle-OutOfStock":
                 return {...filterState,OutOfStock:!filterState.OutOfStock}
        case "Toggle-FastDelivery":
                 return {...filterState,FastDelivery:!filterState.FastDelivery}  
        case "Clear-All":
                 return {...initialFilterState}       
                              
        default:
            return filterState    
    }
}


export const initialFilterState={
    Sort:null,
    PriceRange:0,
    Category:[],
    ProductType:[],
    OutOfStock:false,
    FastDelivery:false,
    Rating:null


}