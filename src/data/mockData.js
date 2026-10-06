// Generate mock data programmatically for massive volume

const generateTiffins = () => {
  const types = ['veg', 'veg', 'non-veg', 'veg', 'vegan'];
  const chefs = ['Aarti', 'Suresh', 'Neha', 'Vikram', 'Priya', 'Rahul', 'Anjali'];
  const baseNames = ['Classic Thali', 'Healthy Bowl', 'Homestyle Curry', 'Keto Special', 'Regional Delight'];
  const images = [
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80'
  ];

  return Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    name: `${baseNames[i % baseNames.length]} ${i + 1}`,
    type: types[i % types.length],
    description: `Freshly prepared homemade meal. Perfect for office lunch. Contains zero preservatives. (Batch ${i})`,
    price: 120 + (i % 10) * 10,
    chefName: chefs[i % chefs.length],
    image: images[i % images.length],
    rating: (4.0 + (i % 10) * 0.1).toFixed(1),
    deliveryTime: `${12 + (i % 2)}:${(i % 4) * 15 || '00'} PM`,
    calories: 400 + (i * 10)
  }));
};

const generateBakery = () => {
  const categories = ['Custom Cake', 'Cheesecake', 'Cookies', 'Brownies', 'Pastry'];
  const bakers = ['Priya', 'Ankit', 'Simran', 'Kavita', 'Rohan'];
  const flavors = ['Chocolate', 'Vanilla', 'Red Velvet', 'Blueberry', 'Mango'];
  const images = [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=400&q=80'
  ];

  return Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `Premium ${flavors[i % flavors.length]} ${categories[i % categories.length]}`,
    category: categories[i % categories.length],
    flavor: flavors[i % flavors.length],
    price: 300 + (i * 25),
    bakerName: bakers[i % bakers.length],
    image: images[i % images.length],
    leadTime: i % 2 === 0 ? '24 hours' : '48 hours',
    rating: (4.2 + (i % 8) * 0.1).toFixed(1),
  }));
};

const generateReviews = () => {
  const names = ['Rahul M.', 'Sneha P.', 'Karan S.', 'Aditi J.', 'Mohit K.', 'Pooja V.', 'Varun D.'];
  const comments = [
    'Tastes like home! Zero waste packaging is a great touch.',
    'Best office birthday cake we ever ordered. So fresh!',
    'Daily meals have become so much better. No more dietary fatigue.',
    'Absolutely loved the seasoning. Perfect spice level.',
    'Delivery was right on time for my lunch break.',
    'The custom cake looked exactly like the reference picture.',
    'Highly recommended for everyday corporate lunches.'
  ];

  return Array.from({ length: 35 }).map((_, i) => ({
    id: i + 1,
    user: names[i % names.length],
    text: comments[i % comments.length],
    rating: 4 + (i % 2),
    date: `2023-10-${(i % 30) + 1}`
  }));
};

const generateOrders = () => {
  const statuses = ['Delivered', 'Preparing', 'Pre-booked by 9PM', 'Out for Delivery'];
  const items = ['Classic Veg Thali', 'Belgian Chocolate Truffle', 'Healthy Millet Bowl', 'Chicken Curry Combo', 'Red Velvet Cupcakes'];
  
  return Array.from({ length: 40 }).map((_, i) => ({
    id: `ORD${1000 + i}`,
    date: `2023-10-${(i % 30) + 1}`,
    items: items[i % items.length],
    totalAmount: 150 + (i * 15),
    status: statuses[i % statuses.length],
    customer: `Emp_${i + 100}`,
  }));
};

export const mockTiffins = generateTiffins();
export const mockBakery = generateBakery();
export const mockReviews = generateReviews();
export const mockOrders = generateOrders();

export const mockChats = [
  { sender: 'User', message: 'Hi, can you make the chicken curry less spicy today?' },
  { sender: 'Chef', message: 'Sure thing! Will adjust the spice level.' }
];
