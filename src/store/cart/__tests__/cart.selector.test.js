import { RootState } from '../../store';

import {
  selectCartItems,
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal
} from '../cart.selector';

const mockCartItems = [
    { id: 1, quantity: 2, price: 10 },
    { id: 2, quantity: 1, price: 15 },
];
const mockCartState: RootState = {
  cart: {
    isCartOpen: true,
    cartItems: mockCartItems,
  },
};

describe('Cart Selectors', () => {
  test('selectCartItems should return the cart items data', () => {
    const cartItemsSlice = selectCartItems(mockCartState);
    expect(cartItemsSlice).toEqual(mockCartItems);
  });

  test('selectIsCartOpen should return the if the cart is open', () => {
    const cartItemsSlice = selectIsCartOpen(mockCartState);
    expect(cartItemsSlice).toEqual(true);
  });

  test('selectCartCount should return the total count of items in the cart', () => {
    const cartCount = selectCartCount(mockCartState);
    const expectedCartCount = mockCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    expect(cartCount).toBe(expectedCartCount);
  });

  test('selectCartTotal should return the total cost of items in the cart', () => {
    const cartTotal = selectCartTotal(mockCartState);
    const expectedCartTotal = mockCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    expect(cartTotal).toBe(expectedCartTotal);
  });
  
});