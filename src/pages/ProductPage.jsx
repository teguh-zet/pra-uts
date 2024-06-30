import  { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import { useId } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filterColor, setFilterColor] = useState('All');
  const randomId = useId();  

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleSaveProduct = (product) => {
    let updatedProducts;
    if (product.id) {
      updatedProducts = products.map((p) => (p.id === product.id ? product : p));
    } else {
      product.id = randomId;
      updatedProducts = [...products, product];
    }
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleDeleteProduct = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus buah ini?")) {
        const updatedProducts = products.filter((p) => p.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        
      }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleInfoProduct = (product) => {
    alert(`Nama: ${product.name}\nHarga: ${product.price}`);
  };

  const handleFilterChange = (e) => {
    setFilterColor(e.target.value);
  };

  const filteredProducts = filterColor === 'All' ? products : products.filter((product) => product.color === filterColor);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6">Daftar Produk</h1>
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setSelectedProduct(null); 
            setIsFormVisible(true);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Produk
        </button>
        <select
          onChange={handleFilterChange}
          value={filterColor}
          className="bg-white border border-gray-300 rounded py-2 px-4 text-gray-700"
        >
          <option value="All">Semua Warna</option>
          <option value="Red">Merah</option>
          <option value="Yellow">Kuning</option>
          <option value="Green">Hijau</option>
          <option value="Orange">Oranye</option>
          <option value="Purple">Ungu</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onInfo={handleInfoProduct}
          />
        ))}
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <ProductForm
            initialProduct={selectedProduct || { name: '', price: '', image: '', color: '' }}
            onSave={handleSaveProduct}
            onClose={() => setIsFormVisible(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
