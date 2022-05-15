import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addToCart, clearCart, completeOrder, decreaseCart, getTotals, removeFromCart} from "../slices/cart";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = (total) => {
        console.log(total)
        dispatch(completeOrder({ total }));
    };

    return (
            <div className="container">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Сумма</th>
                                <th>Действие</th>
                            </tr>
                            </thead>
                            <tbody id="cart">
                            { cart.cartItems &&
                                cart.cartItems.map((item) => (
                                <tr>
                                    <td> {item.name} </td>
                                    <td> {item.description} </td>
                                    <td> {item.count} </td>
                                    <td> {item.price * item.count} </td>
                                    <td> <button onClick={() => handleDecreaseCart(item)}>
                                        -
                                    </button>
                                        <div className="count">{item.count}</div>
                                        <button onClick={() => handleAddToCart(item)}>+</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div> Итого:{cart.cartTotalAmount} </div>
                <button id="order" className="btn btn-info" onClick={() => handleClearCart(cart.cartTotalAmount)}>Оформить заказ</button>
            </div>
    )
}

export default Cart;