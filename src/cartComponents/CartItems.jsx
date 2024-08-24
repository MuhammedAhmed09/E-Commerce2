import React from 'react';

const CartItems = ({ item, onUpdateToCart, onRemoveFromCart }) => {
    const handleUpdateToCart = (lineItemId, quantity) => onUpdateToCart(lineItemId, quantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <table>
            <tbody>
            <tr key={item.id}>
            <td>
                {item.image && <img src={item.image.url} alt={item.name} />}
                <p>{item.name}</p>
            </td>
            <td>
                <p>{item.line_total && item.line_total.formatted_with_symbol}</p>
            </td>
            <td>
                <div>
                {item.quantity}
                </div>
            </td>
            <td>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                <p>
                <button onClick={() => handleUpdateToCart(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => handleUpdateToCart(item.id, item.quantity + 1)}>+</button>
                </p>
            </td>
            </tr>
            </tbody>
        </table>
    );
};

export default CartItems;