import axios from 'axios';

const product = {
  name: "🫚Ámbar",
  description: "Jengibre\nEnergizante\nEnergizante, picante, potente, para quienes buscan intensidad y salud.",
  price: 80,
  category: "bebidas",
  stock: 100,
  image: "https://i.imgur.com/pmOWIxh.jpeg"
};

axios.post('http://localhost:3000/api/products', product)
  .then(response => {
    console.log('Producto agregado exitosamente:', response.data);
  })
  .catch(error => {
    console.error('Error al agregar el producto:', error.response?.data || error.message);
  }); 