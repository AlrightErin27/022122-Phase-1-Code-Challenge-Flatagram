const imgsAPI = "http://localhost:3000/images";
const commentsAPI = "http://localhost:3000/comments";

fetch(imgsAPI)
  .then((res) => res.json())
  .then(displayImg)
  .catch((error) => console.log("ERROR️‍🔥:", error));

fetch(commentsAPI)
  .then((res) => res.json())
  .then(loopAndDisplay)
  .catch((error) => console.log("ERROR️✋🏻:", error));

//-------------GLOBAL VARS
let imgPic = document.querySelector("#card-image");
let imgTitle = document.querySelector("#card-title");
const imgLikesBtn = document.querySelector("#like-button");
let emptyDiv = document.querySelector("#empty-div");
const postBtn = document.querySelector(".comment-button");

//remove that ul
document.querySelector("#comments-list").remove();
//empty ul inserted
const unOrderedLi = document.createElement("list");
emptyDiv.append(unOrderedLi);
unOrderedLi.setAttribute("id", "un-ordered-li");

//-------------FXN: Shows the Image
function displayImg(img) {
  //console.log(img[0].title);
  imgPic.src = img[0].image;
  imgPic.alt = img[0].image;
  imgTitle.innerText = img[0].title;
  document.querySelector("#like-count").textContent = `${img[0].likes} likes`;

  //event lister for likes
  imgLikesBtn.addEventListener("click", handleAddLike);
  function handleAddLike() {
    let updatedLikesNum = ++img[0].likes;
    document.querySelector(
      "#like-count"
    ).textContent = `${updatedLikesNum} likes`;
  }
}

//-------------FXN: Loop through Comments
function loopAndDisplay(commentsArr) {
  commentsArr.forEach(displaySingleComment);
}

//-------------FXN: Displays specific comment in looped thru arr
function displaySingleComment(comment) {
  //console.log(comment.content);
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(comment.content));
  unOrderedLi.appendChild(listItem);
}

//-------------FXN: Add Comment
const form = document.querySelector("#comment-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  let inputVal = form.querySelector(".comment-input").value;
  //console.log(inputVal);
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(inputVal));
  unOrderedLi.appendChild(listItem);

  form.reset();
}
