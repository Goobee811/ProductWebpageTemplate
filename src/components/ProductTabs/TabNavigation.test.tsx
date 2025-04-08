/// <reference types="jest" />
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabNavigation from './TabNavigation';

// Mock các components tab để cô lập việc test TabNavigation
jest.mock('./OverviewTab', () => () => <div data-testid="overview-tab">Overview Tab Content</div>);
jest.mock('./ApplicationTab', () => () => <div data-testid="application-tab">Application Tab Content</div>);
jest.mock('./DocumentTab', () => () => <div data-testid="document-tab">Document Tab Content</div>);

describe('TabNavigation Component', () => {
  const productId = 'test-product';
  
  test('renders all tab buttons', () => {
    render(<TabNavigation productId={productId} />);
    
    expect(screen.getByText('Tổng Quan')).toBeInTheDocument();
    expect(screen.getByText('Ứng Dụng')).toBeInTheDocument();
    expect(screen.getByText('Tài Liệu')).toBeInTheDocument();
  });
  
  test('shows Overview tab by default', () => {
    render(<TabNavigation productId={productId} />);
    
    expect(screen.getByTestId('overview-tab')).toBeInTheDocument();
    expect(screen.queryByTestId('application-tab')).not.toBeInTheDocument();
    expect(screen.queryByTestId('document-tab')).not.toBeInTheDocument();
  });
  
  test('changes tab content when clicking on tab buttons', () => {
    render(<TabNavigation productId={productId} />);
    
    // Initial state
    expect(screen.getByTestId('overview-tab')).toBeInTheDocument();
    
    // Click on Application tab
    fireEvent.click(screen.getByText('Ứng Dụng'));
    expect(screen.queryByTestId('overview-tab')).not.toBeInTheDocument();
    expect(screen.getByTestId('application-tab')).toBeInTheDocument();
    
    // Click on Document tab
    fireEvent.click(screen.getByText('Tài Liệu'));
    expect(screen.queryByTestId('application-tab')).not.toBeInTheDocument();
    expect(screen.getByTestId('document-tab')).toBeInTheDocument();
    
    // Click back to Overview tab
    fireEvent.click(screen.getByText('Tổng Quan'));
    expect(screen.getByTestId('overview-tab')).toBeInTheDocument();
    expect(screen.queryByTestId('document-tab')).not.toBeInTheDocument();
  });
  
  test('applies active class to selected tab button', () => {
    render(<TabNavigation productId={productId} />);
    
    // By default, Overview tab should be active
    expect(screen.getByText('Tổng Quan').closest('button')).toHaveClass('active');
    expect(screen.getByText('Ứng Dụng').closest('button')).not.toHaveClass('active');
    expect(screen.getByText('Tài Liệu').closest('button')).not.toHaveClass('active');
    
    // Click on Application tab
    fireEvent.click(screen.getByText('Ứng Dụng'));
    expect(screen.getByText('Tổng Quan').closest('button')).not.toHaveClass('active');
    expect(screen.getByText('Ứng Dụng').closest('button')).toHaveClass('active');
    expect(screen.getByText('Tài Liệu').closest('button')).not.toHaveClass('active');
    
    // Click on Document tab
    fireEvent.click(screen.getByText('Tài Liệu'));
    expect(screen.getByText('Tổng Quan').closest('button')).not.toHaveClass('active');
    expect(screen.getByText('Ứng Dụng').closest('button')).not.toHaveClass('active');
    expect(screen.getByText('Tài Liệu').closest('button')).toHaveClass('active');
  });
});