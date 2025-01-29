document.addEventListener("DOMContentLoaded", function () {
  // Handle Post Submission
  const postButton = document.querySelector(".create-post button");
  const postTextArea = document.querySelector(".create-post textarea");
  const postsContainer = document.querySelector(".posts");

  postButton.addEventListener("click", function () {
    const postText = postTextArea.value.trim();

    // If the post text is not empty, create a new post
    if (postText !== "") {
      // Create a new post element
      const newPost = document.createElement("div");
      newPost.classList.add("post");

      newPost.innerHTML = `
            <div class="user-info">
              <img src="https://via.placeholder.com/40" alt="User Avatar" class="avatar">
              <div class="user-details">
                <strong>Your Name</strong>
                <span>Just now</span>
              </div>
            </div>
            <p class="post-text">${postText}</p>
            <div class="post-actions">
              <button class="like-btn"><i class="fas fa-thumbs-up"></i> Like</button>
              <button class="comment-btn"><i class="fas fa-comment"></i> Comment</button>
              <button class="share-btn"><i class="fas fa-share"></i> Share</button>
            </div>
          `;

      // Add the new post to the feed section
      postsContainer.insertBefore(newPost, postsContainer.firstChild);

      // Clear the text area after posting
      postTextArea.value = "";
    } else {
      alert("Please write something before posting.");
    }
  });

  // Handle Logout
  const logoutButton = document.querySelector(".logout-btn");

  logoutButton.addEventListener("click", function () {
    // Simulating logging out by redirecting to a login page or refreshing
    // In a real-world app, you'd likely send a logout request to the server here
    //alert("You have logged out.");
    window.location.href = "index.html"; // Redirect to login page (adjust the path as necessary)
    // Or, for demonstration:
    // window.location.reload(); // Uncomment this to reload the page
  });
});

// Function to open/close the side menu
function toggleMenu() {
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  if (sideMenu.style.left === "0px") {
    closeMenu();
  } else {
    sideMenu.style.left = "0px";
    overlay.style.display = "block";
  }
}

// Function to close the side menu
function closeMenu() {
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");
  sideMenu.style.left = "-250px";
  overlay.style.display = "none";
}
