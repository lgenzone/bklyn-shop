import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Lauren',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Becca',
            email: 'becca@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },

    ],
    products: [
        {
            //_id: '1',
            name: 'Beard Oil + Hyaluronic Serum',
            slug: 'beard-oil',
            category: 'Serums',
            image: '/images/p2.png',
            price: 80, 
            countInStock: 0,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            //_id: '2',
            name: 'Cherry Enzyme Wash',
            slug: 'cherry-enzyme-wash',
            category: 'Facewash',
            image: '/images/p1.png', //679px x 829px
            price: 75,
            countInStock: 10,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            //_id: '3',
            name: 'Acne Wash',
            slug: 'acne-wash',
            category: 'Facewash',
            image: '/images/p1.png',
            price: 75,
            countInStock: 20,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            //_id: '4',
            name: 'Ultra Firm Peptide',
            slug: 'ultra-firm-peptide',
            category: 'Cream',
            image: '/images/p1.png',
            price: 100,
            countInStock: 30,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ],
}

export default data;