const API = "http://localhost:8080/api";

const SummaryApi = {
  Register: {
    url: `${API}/register`,
    method: "POST",
  },

  logIn: {
    url: `${API}/login`,
    method: "POST",
  },

  ImageUpload: {
    url: `${API}/admin/products/upload/image`,
    method: "POST",
  },

  currentUser: {
    url: `${API}/public/users`,
    method: "GET",
  },

  // logout_user: {
  //   url: `${API}/userLogout`,
  //   method: "GET",
  // },

  allUser: {
    url: `${API}/admin/users`,
    method: "GET",
  },

  updateUser: {
    url: `${API}/update-user`,
    method: "POST",
  },

  addProduct: {
    url: `${API}/admin/add/product`,
    method: "POST",
  },

  allProduct: {
    url: `${API}/public/products`,
    method: "GET",
  },

  updateProduct: {
    url: `${API}/admin/products`,
    method: "POST",
  },

  categoryProduct: {
    url: `${API}/public/categories`,
    method: "GET",
  },

  categoryWiseProduct: {
    url: `${API}/public/categories`,
    method: "GET",
  },

  productDetails: {
    url: `${API}/public/products`,
    method: "GET",
  },

  addToCart: {
    url: `${API}/public/carts`,
    method: "POST",
  },

  addToCartProductCount: {
    url: `${API}/countAddToCartProduct`,
    method: "GET",
  },

  addToCartProductView: {
    url: `${API}/view-card-product`,
    method: "GET",
  },

  updateCartProduct: {
    url: `${API}/update-cart-product`,
    method: "POST",
  },

  deleteCartProduct: {
    url: `${API}/delete-cart-product`,
    method: "POST",
  },

  searchProduct: {
    url: `${API}/search`,
    method: "GET",
  },

  filterProduct: {
    url: `${API}/filter-product`,
    method: "POST",
  },
};

export default SummaryApi;
