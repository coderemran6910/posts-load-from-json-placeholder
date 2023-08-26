function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('postContainer')

    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('postBody')
        div.innerHTML= `
        <h4> User ID: ${post.userId} </h4>
        <h5> Post Title: ${post.title} </h5>
        <p> ${post.body} </p>
        `;
        postContainer.appendChild(div)
    }
}



loadPosts()