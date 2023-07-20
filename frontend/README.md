# bklyn E-COMMERCE Application

bklyn-shop is an e-commerce site designed for a small business owner who sells skin products. This application allows users to browse and purchase skin products, create user accounts, manage their account information, place orders, and view order history. The application supports payment processing through PayPal and Stripe. The site is currently a work in progress, with placeholder images being used for products. In the future, the business owner will provide actual product photos, and additional features such as a reviews component will be implemented. Styling updates will also be made to enhance the user interface.

## Installation 

Follow the link to access the deployed application ~INSERT LINK~

To run the application locally, please follow these steps:

1. Clone the repository from GitHub:
```
git clone git@github.com:lgenzone/bklyn-shop.git
```

2. Navigate to the project directory 
```
cd bklyn-shop
```

3. Install the dependencies for both the backend and frontend:

##### Install backend dependencies
```
cd back-end
npm install
```
##### Install frontend dependencies
```
cd ../front-end
npm install
```

4. Create Environment Variables 
* Create a .env file in the backend directory.
* Set the following environment variables in the .env file:
```
JWT_SECRET=<your_jwt_secret>
MONGODB_URI=<your_mongodb_connection_string>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
PAYPAL_CLIENT_ID=<your_paypal_client_id>
```
5. Pull in Route Data:
```
cd ../back-end
node routes/orderRoutes.js
node routes/productRoutes.js
node routes/seedRoutes.js
node routes/userRoutes.js
```

6. Start the Application: 
##### Start the backend server
```
node server.js
```
##### Start the frontend development server
```
cd ../front-end
npm start
```
7. Start the Application 
 
If the application doesn't launch automatically, open your browser and visit `http://localhost:3000`.

## Features 

* User Authentication: Users can create accounts, log in, and log out. Account information, such as name, email, and address, can be managed by the user.
 * Product Listing: Users can browse and view all available skin products provided by the bklyn store. Each product displays its name, price, and description.
* Product Details: Users can click on a product to view detailed information about it, including additional images, product variants, and reviews (to be implemented).
* Shopping Cart: Users can add products to their shopping cart, view the cart, and update or remove items as needed.
* Order Placement: Users can proceed to checkout, where they can select their preferred payment method (PayPal or Stripe) and complete the order.
* Order History: Users can view their order history, including the details of each past order.
* Payment Processing: The application supports payment processing through PayPal and Stripe, allowing users to securely complete their orders.
* Reviews Component (To be implemented): Users will be able to leave reviews for products and view reviews left by other customers.

## Technologies Used 

The bklyn-shop e-commerce application is built using the MERN stack, which includes the following technologies:

* MongoDB: A NoSQL database used to store product information, user data, and order details.
* Express: A web framework for Node.js used to build the backend API.
* React: A JavaScript library used for building user interfaces.
* Node.js: A JavaScript runtime environment used for running the backend server.

## Future Enhancements

* Product Images: Implement actual product photos provided by the business owner, replacing the current placeholder images.
* Reviews Component: Add the ability for users to leave reviews for products and view reviews left by other customers.
* Updated UI: Improve the styling and layout of the application to create a visually appealing and user-friendly interface.

## License 

This project is licensed under the MIT license.

## Questions 

For questions related to this project, please reach out to me via email:

lgenzone@icloud.com

## Screenshots
![Screen Shot 2023-07-10 at 10 06 22 PM](https://github.com/lgenzone/bklyn-shop/assets/113480175/b59e314d-02b4-4149-86a5-8dd7a1cef0aa)

![Screen Shot 2023-07-10 at 10 18 29 PM](https://github.com/lgenzone/bklyn-shop/assets/113480175/1971b58c-0278-45f4-9195-9c1b0b848a61)


![Screen Shot 2023-07-10 at 10 06 54 PM](https://github.com/lgenzone/bklyn-shop/assets/113480175/2cb078de-a6dc-45c0-9afd-4503e5da752f)

![Screen Shot 2023-07-10 at 10 15 00 PM](https://github.com/lgenzone/bklyn-shop/assets/113480175/5fd88cdf-5a97-46f2-b272-6d00a46b467c)

