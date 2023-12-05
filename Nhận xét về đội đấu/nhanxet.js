

function stopPropagation(event) {
    event.stopPropagation();
}

function handleInput() {
    console.log('Input detected');
}

function addComment() {
    console.log('Button click detected');
    updateComments();
}

function updateComments() {
    var teamComments = document.getElementById('teamComments');
    var teamTextarea = document.getElementById('teamTextarea');

    var newComment = document.createElement('div');
    newComment.className = 'comment';
    
    var commentParagraph = document.createElement('p');
    commentParagraph.textContent = teamTextarea.value;

    newComment.appendChild(commentParagraph);
    teamComments.insertBefore(newComment, teamComments.firstChild); // Chèn lên đầu danh sách

    commentParagraph.classList.add('new-comment');

    teamTextarea.value = '';
}
