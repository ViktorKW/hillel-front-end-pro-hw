const main_form = document.querySelector(".main-form");
const id_input = main_form.elements["id"];

const html_post = document.querySelector(".post");

main_form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (id_input.value.length > 0) {
    let promise = new Promise(function (resolve, reject) {
      fetch(
        `https://jsonplaceholder.typicode.com/todos/${id_input.value}`
      ).then((responce) =>
        responce.status === 200
          ? resolve(responce.json())
          : reject("not a valid id")
      );
    });

    promise
      .then((post) => {
        let second_promise = new Promise(function (resolve, reject) {
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${id_input.value}/comments`
          ).then((responce) =>
            responce.status === 200
              ? resolve(responce.json())
              : reject("unknown error")
          );
        });

        second_promise
          .then((comments) => {
            revealData(post, comments);
          })
          .catch((error) => console.log(`Error: ${error}`));
      })
      .catch((error) => console.log(`Error: ${error}`));
  }
});

function revealData(post_obj, comments_array) {
  html_post.value = "";
  html_post.insertAdjacentHTML(
    "afterbegin",
    `<div class = "post-container>
      <div class = "post-info">
        <h4>Post Info: </h4>
        <ul>
          <li> 
            <p>UserId: ${post_obj.userId}</p>
          </li>
          <li> 
            <p>Id: ${post_obj.id}</p>
          </li>
          <li> 
            <p>Title: ${post_obj.title}</p>
          </li>
          <li> 
            <p>Completed: ${post_obj.completed}</p>
          </li>
        </ul>
      </div>
      <div class = "post-comments">
        ${parse_comments(comments_array)}
      </div>
    </div>`
  );
}

function parse_comments(comments_array) {
  console.log(comments_array);
  let result = "";
  comments_array.forEach((element, i) => {
    result += `<div class = "comment-container">
                <h5>Comment ${i + 1}</h5>
                <ul>
                  <li>
                    <p>PostId: ${element.postId}</p>
                  </li>
                  <li>
                    <p>Id: ${element.id}</p>
                  </li>
                  <li>
                    <p>Name: ${element.name}</p>
                  </li>
                  <li>
                    <p>Email: ${element.email}</p>
                  </li>
                  <li>
                    <p>Body: ${element.body}</p>
                  </li>
                </ul>
              </div>`;
  });
  return result;
}
// fetch(`https://jsonplaceholder.typicode.com/todos/${id_input.value}`)
//       .then((responce) => responce.json())
//       .then((json) => console.log(json))
//       .catch((error) => console.log(error));
