E-Shop – React E-Commerce Application

E-Shop is a responsive and modern e-commerce web app built with React.js and Material UI. It fetches product data from Fake Store API and displays them in a clean, responsive grid layout with product cards.

Features
Fetches and displays products from a public API
Product cards with image, title, price, and ratings
Fully responsive layout using MUI Grid
Hover effect on product cards for interactivity
Clickable cards navigate to individual product details (placeholder)


Tech Stack
React.js
Material UI (MUI)
Axios for API calls
React Router DOM (for navigation)

Folder Structure
ALISTE_ASSIGNMENT/
│
├── aliste/
│   ├── node_modules/               # Project dependencies
│   ├── public/
│   │   └── index.html              # HTML template
│   ├── src/                        # Source code
│   │   ├── component/              # Reusable logic/context
│   │   │   └── CartContext.js      # Context for cart state management
│   │   ├── CartPage.jsx            # Cart items and checkout
│   │   ├── Home.jsx                # Product listing page
│   │   ├── Navbar.jsx              # Top navigation bar
│   │   ├── ProductCard.jsx         # Product card component
│   │   ├── ProductDetailPage.jsx   # Detailed product view
│   │   ├── App.js                  # Main app component
│   │   ├── App.css                 # App-specific styles
│   │   ├── index.js                # Entry point
│   │   └── index.css               # Global styles
│   ├── package.json                # Project metadata and dependencies
│   ├── package-lock.json           # Exact dependency versions
│   ├── .gitignore                  # Git ignored files
│   └── README.md                   # Project documentation

Installation
Clone the repository
git clone https://github.com/avinroy001/aliste.git
cd aliste
Install dependencies
npm install
Start the development server
npm start
Open your browser and go to http://localhost:3000

API Used
FakeStoreAPI

Customization Tips
Replace FakeStoreAPI with your own product backend.
Extend functionality: Add to cart, product filters, search, sorting, authentication, and checkout.
Create a full product details page under /product/:id.

Future Improvements
Add shopping cart and localStorage support
Add user authentication and protected routes
Create product categories and filters
Integrate payment gateway

Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or submit an issue.