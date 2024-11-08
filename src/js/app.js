// Запрос данных с сервера
async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  }
  
  // Функция для отображения товаров на странице
  function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Очищаем контейнер перед отображением
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Цена: $${product.price}</p>
        <img src="${product.image}" alt="${product.name}">
      `;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Запуск функции при загрузке страницы
  fetchProducts();
  