// Example API URLs
const apiPostCommentUrl = 'http://localhost:4000/api/v1/comment'; // API to post the comment
const apiGetCommentsUrl = 'http://localhost:4000/api/v1/comment'; // API to get all comments
const apiDeleteCommentUrl = 'http://localhost:4000/api/v1/comment'; // API to delete a comment

// Function to fetch all comments from the API and display them
async function fetchComments() {
	try {
		// const response = await fetch(apiGetCommentsUrl);
		// const comments = await response.json();
		console.log(comments);
		// Assuming the API returns a JSON array
		// renderComments(comments);
		console.log('hello');
	} catch (error) {
		console.error('Error fetching comments:', error);
	}
}

// Function to render all comments in the HTML
function renderComments(comments) {
	const commentsList = document.getElementById('comments-list');
	commentsList.innerHTML = ''; // Clear the list before rendering new comments

	comments.forEach((comment) => {
		const li = document.createElement('li');
		li.textContent = comment.comment; // Assuming each comment has a 'text' property

		// Create a delete button
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('delete-button');
		deleteButton.addEventListener('click', () => deleteComment(comment._id)); // Assuming each comment has an 'id' property

		// Append the delete button to the list item
		li.appendChild(deleteButton);
		commentsList.appendChild(li);
	});
}

// Function to post a new comment to the API
async function postComment(comment) {
	try {
		const response = await fetch(apiPostCommentUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userId: 'jaswanth', comment: comment }),
		});

		if (response.ok) {
			fetchComments(); // Refresh the comments list after posting a new comment
		} else {
			console.error('Error posting comment:', response.statusText);
		}
	} catch (error) {
		console.error('Error posting comment:', error);
	}
}

// Function to delete a comment
async function deleteComment(commentId) {
	try {
		const response = await fetch(`${apiDeleteCommentUrl}/${commentId}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			fetchComments(); // Refresh the comments list after deleting a comment
		} else {
			console.error('Error deleting comment:', response.statusText);
		}
	} catch (error) {
		console.error('Error deleting comment:', error);
	}
}

// Add event listener to the form to handle comment submission
document
	.getElementById('comment-form')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the form from refreshing the page

		const commentInput = document.getElementById('comment-input');
		const commentText = commentInput.value.trim();

		if (commentText) {
			postComment(commentText); // Send the comment to the API
			commentInput.value = ''; // Clear the input after submission
		}
	});

// Fetch all comments when the page loads
fetchComments();









document.getElementById('user-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from bubbling up
    var dropMenu = document.getElementById('drop-menu');
    // Toggle display of dropdown
    dropMenu.style.display = dropMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown if clicking outside
document.addEventListener('click', function(event) {
    var dropMenu = document.getElementById('drop-menu');
    if (!dropMenu.contains(event.target) && !document.getElementById('user-icon').contains(event.target)) {
        dropMenu.style.display = 'none';
    }
});