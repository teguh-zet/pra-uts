
const ProductCard = ({ product, onEdit, onDelete, onInfo }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 bg-white">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">Harga: {product.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => onInfo(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Info
        </button>
        <button
          onClick={() => onEdit(product)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
