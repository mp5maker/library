import css from 'styled-jsx/css';

export default css `
    h1, a {
        font-family: 'Arial';
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        margin: 5px 0;
    }

    a {
        text-decoration: none;
        color: #007bff;
    }

    a:hover {
        opacity: 0.6;
    }
`