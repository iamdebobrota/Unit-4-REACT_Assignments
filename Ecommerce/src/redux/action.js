//for add item

export const addToCart =(product)=>{

    return {
        type:"ADDITEM",
        payload: product
    }
}
//for delete
export const delCart =(product)=>{

    return {
        type:"DELITEM",
        payload: product
    }
}