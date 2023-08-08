import { Flex } from "./Styled";

export const ProductCard = ({ title, id, brand, image, price, category }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <h2>{brand}</h2>
        <p>Price:{price}</p>
      </Flex>
    </>
  );
}