import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from '../category.reducer';

import {
  setCategories
} from '../category.action';

describe('Category Reducer action tests', () => {
  test('setCategories', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'test',
        items: [
          { id: 3, name: 'Product 3' },
          { id: 4, name: 'Product 4' },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,      
      categories: mockData,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        setCategories(mockData)
      )
    ).toEqual(expectedState);
  });
})