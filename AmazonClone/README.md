# Amazon Clone (Frontend Only)

A fully responsive, feature-rich Amazon clone built with React, Tailwind CSS, and Context API.

## Features

*   **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
*   **Routing:** React Router v6 for navigation.
*   **State Management:** Context API for Cart management (Add, Remove, Update Quantity).
*   **Persisted State:** Cart data is saved to LocalStorage.
*   **Product Listings:** Dynamic product grid with mock data.
*   **Product Details:** Detailed view for each product with image, rating, and description.
*   **Cart:** Functional cart with subtotal calculation and quantity adjustments.
*   **Checkout:** Multi-step checkout UI (Address, Payment, Review).
*   **Search & Filter:** UI components for search bar and category filtering (Header).
*   **Authentication UI:** Login and Signup page designs.

## Tech Stack

*   **React** (Vite)
*   **Tailwind CSS** (Styling)
*   **Lucide React** (Icons)
*   **React Router DOM** (Navigation)

## Getting Started

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser.

## Project Structure

*   `src/components`: Reusable UI components (Header, ProductCard, etc.)
*   `src/pages`: Page components (Home, Cart, Checkout, etc.)
*   `src/context`: Global state management (CartContext).
*   `src/utils`: Helper functions and mock data.

## Screenshots

*(Add screenshots here)*

## Disclaimer

This is a frontend-only educational project. No real payments are processed.
