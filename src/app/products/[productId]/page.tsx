const ProductDetail = ({ params }: { params: { productId: String } }) => {
  return <div>Product detail {params.productId} !</div>;
};

export default ProductDetail;
