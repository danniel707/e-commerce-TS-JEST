import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Directory from '../directory.component';
import { getDirectoryDocuments } from '../../../utils/firebase/firebase.utils';

jest.mock('../../../utils/firebase/firebase.utils');

describe('Directory component', () => {
  const mockDirectoryData = [
    { id: 1, title: 'Category 1' },
    { id: 2, title: 'Category 2' },
    { id: 3, title: 'Category 3' },
  ];

  beforeEach(() => {
    getDirectoryDocuments.mockResolvedValue(mockDirectoryData);
  });

  test('should render directory items after fetching data', async () => {
    const { getByText } = render(<Directory />);

    // Wait for directory items to be rendered
    await waitFor(() => {
      mockDirectoryData.forEach((category) => {
        expect(getByText(category.title)).toBeInTheDocument();
        
      });
    });    
  });

  test('should render spinner while loading', async () => {
    // Mock loading state
    getDirectoryDocuments.mockImplementation(() => new Promise(() => {}));
    
    const { getByTestId } = render(<Directory />);

    // Ensure spinner is rendered
    expect(getByTestId('spinner')).toBeInTheDocument();
    
  });

});
