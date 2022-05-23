const ProductDisplay = (props) => {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <ul>
        <li>{props.item.color}</li>
        <li>{props.item.stock}</li>
      </ul>
    </div>
  );
};

export default ProductDisplay;
