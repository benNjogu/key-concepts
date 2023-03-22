import fetch from "node-fetch";

const api = "https://jsonplaceholder.typicode.com";

//Using promise
const getPostsPromise = () => {
  fetch(api + "/users")
    .then((res) => res.json())
    .then((users) => {
      const firstUser = users[0];
      console.log(firstUser);

      return fetch(api + "/posts?userId=" + firstUser.id);
    })
    .then((res) => res.json())
    .then((posts) => console.log(posts));
};

//Using async/await
const getPostsAsync = async () => {
  try {
    const usersResponse = await fetch(api + "/users");
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log(firstUser);

    const postsResponse = await fetch(api + "/posts?userId=" + firstUser.id);
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};

getPostsAsync();
