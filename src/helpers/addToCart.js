import SummaryApi from "../common";
import { toast } from "react-toastify";

const addToCart = async (e, productId) => {
  e?.stopPropagation();
  e?.preventDefault();

  let quantity = 1;
  const response = await fetch(
    `${SummaryApi.addToCart.url}/${cartId}/products/${productId}/quantity/${quantity}`,
    {
      method: SummaryApi.addToCartProductCount.method,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  const responseData = await response.json();

  if (responseData.success) {
    toast.success(responseData.message);
  }

  if (responseData.error) {
    toast.error(responseData.message);
  }

  return responseData;
};

export default addToCart;
