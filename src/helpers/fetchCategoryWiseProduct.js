import SummaryApi from "../common";

const fetchCategoryWiseProduct = async (category) => {
  const jwtToken = localStorage.getItem("token");
  const response = await fetch(
    `${SummaryApi.categoryWiseProduct.url}/${category}/products`,
    // `${SummaryApi.categoryWiseProduct.url}/3/products/?pageNumber=1&pageSize=10`,
    {
      method: SummaryApi.categoryWiseProduct.method,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "content-type": "application/json",
      },
    }
  );

  const responseData = await response.json();
  return responseData.content;
};

export default fetchCategoryWiseProduct;
