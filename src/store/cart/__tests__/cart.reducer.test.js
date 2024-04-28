import {
  cartReducer,
  CART_INITIAL_STATE,
} from '../cart.reducer';

import {
  setIsCartOpen,
  setCartItems,

} from '../cart.action';

describe('Cart Reducer action tests', () => {

  test('setCartItems', () => {
    const mockData = [
      { id: 1, name: 'Product 1', quantity: 1 },
      { id: 2, name: 'Product 2', quantity: 2 },                  
    ];

    const expectedState = {
      ...CART_INITIAL_STATE,      
      cartItems: mockData,
    };

    expect(
      cartReducer(
        CART_INITIAL_STATE,
        setCartItems(mockData)
      )
    ).toEqual(expectedState);
  });

  test('setIsCartOpen', () => {
    const isCartOpen = true;
    const newState = cartReducer(undefined, setIsCartOpen(isCartOpen));
    expect(newState.isCartOpen).toEqual(isCartOpen);
  })
})