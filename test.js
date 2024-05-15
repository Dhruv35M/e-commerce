const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwQG1haWwuY29tIiwiaWF0IjoxNzE1MzI1MzM4LCJleHAiOjI1NzkzMjUzMzh9.nbPGRXwRfgqBHj8_Iz-H45WALWj0RXENRIRTM49x2kzN0Uwotia2TeBr-GJgUKZSDcEeBcVltG0gMbZfDT5P8A"
);

const raw = "";

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("http://localhost:8080/api/public/users/28", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
