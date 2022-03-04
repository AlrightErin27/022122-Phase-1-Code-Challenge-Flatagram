//console.log("🌎 Hello");
////////----------------------IMGS API
// [
//     {
//       "id": 1,
//       "title": "Woofing those bugs away",
//       "likes": 0,
//       "image": "./assets/coder-dog.png"
//     }
//   ]

////////----------------------COMMENTS API
// [
//     {
//       "id": 1,
//       "imageId": 1,
//       "content": "What a cute dog!"
//     },{
//       "id": 2,
//       "imageId": 1,
//       "content": "He's got a nose for bugs!"
//     },
//     {
//       "id": 3,
//       "imageId": 1,
//       "content": "Woof!"
//     }
//   ]

const imgsAPI = "http://localhost:3000/images";
const commentsAPI = "http://localhost:3000/comments";

// fetch(toyAPI)
// .then((res) => res.json())
// .then(renderPreMadeToys)
// .catch((err) => console.log("ERROR️‍🔥:", err));
fetch(imgsAPI)
  .then((res) => res.json())
  .then(displayImg)
  .catch((error) => console.log("ERROR️‍🔥:", error));

fetch(commentsAPI)
  .then((res) => res.json())
  //   .then(loopAndDisplay)
  .catch((error) => console.log("ERROR️✋🏻:", error));

//-------------GLOBAL VARS
let imgPic = document.querySelector("#card-image");
let imgTitle = document.querySelector("#card-title");
let imgLikesNum = document.querySelector("#likes-count");
let imgLikesBtn = document.querySelector("#like-button");

//-------------FXN: Shows the Image
function displayImg(img) {
  //console.log(img[0].title);
  imgPic.src = img[0].image;
  imgPic.alt = img[0].image;
  imgTitle.innerText = img[0].title;
  imgLikesNum = img[0].likes;
}

//-------------FXN: Loop through Comments
function loopAndDisplay(commentsArr) {
  //console.log(commentsArr);
  commentsArr.forEach(displaySingleComment);
}
//-------------FXN: Displays specific item in looped thru arr
function displaySingleComment(item) {}
