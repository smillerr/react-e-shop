const getOrderIndex = (orders, order) => {
    return orders?.findIndex((element) => element?.date === order.date)
}


export default getOrderIndex;