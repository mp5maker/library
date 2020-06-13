import React, { useState, useEffect } from "react"
import socketIO from 'socket.io-client'
import get from 'lodash/get'

import { SERVER } from '../constants/Routes'
import "./Socket.css"

const socket = socketIO(SERVER)
export const Socket = () => {
    const [messages, setMessages] = useState([])
    const [enterAMessage, setEnterAMessage] = useState("")

    const onKeyDown = (event) => {
        if (event.keyCode === 13 && event.key === 'Enter') onSubmit()
    }

    const onChange = (event) => {
        const msg = get(event, 'target.value', '')
        setEnterAMessage(msg)
    }

    const onSubmit = (event = "") => {
        event && event.preventDefault()
        /* Chat */
        socket.emit("chat", enterAMessage)
        setEnterAMessage("")
    }

    useEffect(() => {
        /* Information */
        socket.on("information", (data) => {
            const allMessages = [...messages, data]
            setMessages(allMessages)
        })

        /* Chat */
        socket.on("chat", (data) => {
            const allMessages = [...messages, data]
            setMessages(allMessages)
        })

        return () => {}
    }, [messages])

    return (
        <React.Fragment>
            <div className="chatroom">
                <div className={`messages`}>
                    {
                        messages.map((message, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <div>
                                        { message }
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className={`type`}>
                    <input
                        onKeyDown={onKeyDown}
                        value={enterAMessage}
                        onChange={onChange}
                        name="enterAMessage"
                        type="text" />
                    <button onClick={onSubmit}>
                        Send
                    </button>
                </div>
            </div>
        </React.Fragment>
    )

}