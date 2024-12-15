function addComment(post) {
    let name = document.getElementById(`name${post}`).value;
    let comment = document.getElementById(`comment${post}`).value;
  
    if (name && comment) {
      let commentSection = document.getElementById(`comments${post}`);
      let newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;
      commentSection.appendChild(newComment);
  
      // Clear the input fields
      document.getElementById(`name${post}`).value = '';
      document.getElementById(`comment${post}`).value = '';
    } else {
      alert('Please fill in both fields!');
    }
  }
  