const url = ``;
// const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "product");

  const responseData = await fetch(url, {
    method: "POST",
    body: formData,
  });

  return responseData.json();
};

export default uploadImage;
