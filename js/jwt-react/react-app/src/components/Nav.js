import React from 'react';

function Nav(props) {
    const logged_out_nav = (
        <ul>
            <li onClick={() => props.display_form('login')}>login</li>
            <li onClick={() => props.display_form('signup')}>signup</li>
        </ul>
    );

    const logged_in_nav = (
        <ul>
            <li onClick={props.handle_logout}>logout</li>
        </ul>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;