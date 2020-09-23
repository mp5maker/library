module.exports = (query) => {
    const { author, title, website, image } = query;

    return `
        <!DOCTYPE html>
        <html>
            <meta charset="utf-8">
            <title>Generated Image</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
            </style>
            <body>
                <div class="container">
                    <div class="title">${title}</div>
                    <div class="author">
                        <img src="${image}" class="author-image" />
                        ${author}
                    </div>
                    <div classs="website">${website}</div>
                </div>
            </body>
        </html>
    `;
};