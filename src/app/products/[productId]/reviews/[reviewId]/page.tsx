import { notFound } from "next/navigation";
const ProductReview = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} of Proudct {params.productId}
      </h1>
    </div>
  );
};

export default ProductReview;
