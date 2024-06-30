import { useState } from 'react';

const ProductForm = ({ initialProduct, onSave, onClose }) => {
  const [product, setProduct] = useState(initialProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nama Produk
        </label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nama Produk"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Harga
        </label>
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Harga"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          URL Gambar
        </label>
        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="URL Gambar"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
          Warna
        </label>
        <select
          name="color"
          value={product.color}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Pilih Warna</option>
          <option value="Red">Merah</option>
          <option value="Yellow">Kuning</option>
          <option value="Green">Hijau</option>
          <option value="Orange">Oranye</option>
          <option value="Purple">Ungu</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Batal
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
