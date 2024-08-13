document.addEventListener("DOMContentLoaded", () => {
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");
  let count = 0;

  likeButton.addEventListener("click", () => {
    count += 1;
    likeCount.textContent = count;
  });

  // You can add event listeners for the Follow and Share buttons if needed
  const followButton = document.getElementById("follow-button");
  const shareButton = document.getElementById("share-button");

  followButton.addEventListener("click", () => {
    alert("Follow button clicked!");
  });

  shareButton.addEventListener("click", () => {
    alert("Share button clicked!");
  });
});
