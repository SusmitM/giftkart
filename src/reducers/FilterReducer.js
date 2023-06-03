export const filterReducer = (filterState, action) => {
    switch (action.type) {
        case "Sort-Filter":
            return {
                ...filterState, Sort: action.payload
            }
            case "Rating-Filter":
                return {
                    ...filterState, Rating: action.payload
                }
                case "Price-Filter":
                    return {
                        ...filterState, PriceRange: action.payload
                    }
                    case "Category-Filter":
                        const updatedCategory = filterState.Category.includes(action.payload) ?
                            filterState.Category.filter((category) => category !== action.payload) :
                            [...filterState.Category, action.payload];
                        return {
                            ...filterState, Category: updatedCategory
                        };

                    case "ProductType-Filter":
                        const updatedProductType = filterState.ProductType.includes(action.payload) ?
                            filterState.ProductType.filter((product) => product !== action.payload) :
                            [...filterState.ProductType, action.payload];

                        return {
                            ...filterState, ProductType: updatedProductType
                        };
                    case "Toggle-OutOfStock":
                        return {
                            ...filterState, OutOfStock: !filterState.OutOfStock
                        }
                        case "Toggle-FastDelivery":
                            return {
                                ...filterState, FastDelivery: !filterState.FastDelivery
                            }
                            case "Clear-All":
                                return {
                                    ...initialFilterState, Category: []
                                };

                            default:
                                return filterState
    }
}


export const initialFilterState = {
    Sort: null,
    PriceRange: 0,
    Category: [],
    ProductType: [],
    OutOfStock: false,
    FastDelivery: false,
    Rating: null


}