export default function ProductReviewList({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Reviews list of product {params.productId}</h1>
      <ul>
        <ol>Review 1</ol>
        <ol>Review 2</ol>
        <ol>Review 3</ol>
      </ul>
    </>
  );
}
