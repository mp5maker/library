const init = async () => {
    const id = new URLSearchParams(window.location.search).get('id')
    let uri = `http://localhost:3000/posts/${id}`;

    const response = await fetch(uri);
    const post = await response.json();
    const container = document.querySelector(".post");

    let template = ``;
    template += `
        <div class="post">
            <h2> ${post.title} </h2>
            <p>
                <small>
                    ${post.body}
                </small>
            </p>
        </div>
    `

    container.innerHTML = template;
};

window.onload = init;
