import React, { Component, Fragment } from 'react'

import { inject, observer } from 'mobx-react'

@inject('BirdStore')
@observer
class Birds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bird: ""
        }
    }

    onChange = ({ event }) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = ({ event } = {}) => {
        event.preventDefault();
        this.props.BirdStore.addBird(this.state.bird)
    }

    removeBird = ({ event, bird } = {}) => {
        this.props.BirdStore.removeBird(bird)
    }

    render() {
        const { BirdStore } = this.props;

        return (
            <Fragment>
                <div>
                    You have {BirdStore.birdCount} birds
                </div>
                <div>
                    <form onSubmit={(event) => this.onSubmit({ event })}>
                        <input
                            onChange={(event) => this.onChange({ event })}
                            name="bird"
                            type="text"
                            placeholder="Add Bird" />
                        <button>
                            Add Bird
                        </button>
                    </form>
                    <ul>
                        {
                            BirdStore.birds.map((bird, index) => (
                                <li key={index} >
                                    <span>
                                        {bird}
                                    </span>
                                    <button onClick={(event) => this.removeBird({ event, bird })}>
                                        &times;
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Birds