const calculateTotal = (products) => {
    let totalValue= 0;
    for(let product of products){
        totalValue=totalValue+product.price;
    }
    return `$${totalValue}.00`;
}
export default calculateTotal;