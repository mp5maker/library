const init = async () => {
    let uri =  "http://localhost:3000/posts"
    const thisApp =
        "http://localhost:5500/full-stack/backend/node-app/json-server";

    const response = await fetch(uri);
    const posts = await response.json()
    const container = document.querySelector('.posts')

    let template = ``;
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2> ${post.title} </h2>
                <p>
                    <small>
                        ${post.body}
                    </small>
                </p>
                <a href="${thisApp}/details.html?id=${post.id}">
                    Read More
                </a>
            </div>
        `
    })

    container.innerHTML = template
}

window.onload = init