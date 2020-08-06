import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Block = styled.div`
    margin: 6px;
`

const Avatar = styled.img`
    flex: 0 0 96px;
    width: 96px;
    height: 96px;
    margin: 0;
    border-radius: 50%;
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.1);
`

const Username = styled.h2`
    margin: 0 0 12px 0;
    padding: 0;
    font-size: 12px;
    color: purple;
    text-align: center;
`

const User = props => (
    <>
        <Block>
            <Avatar src={props.avatar} alt={props.username} />
            <Username>{props.username}</Username>
        </Block>
    </>
)

export const UserList = () => {
    return (
        <Container>
            <User
                username="Jane Doe"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" />
            <User
                username="Bob Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg" />
        </Container>
    )
}