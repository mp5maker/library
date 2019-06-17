import { Fragment } from 'react'

import { Typeahead } from 'react-bootstrap-typeahead';

import "bootstrap/dist/css/bootstrap.min.css"

import 'react-bootstrap-typeahead/css/Typeahead.css';

import "./index.scss"

const Home = () => (
    <Fragment>
        <nav className="navbar navbar-bg bg-dark">
            <a className="navbar-brand text-white">
                Testing
            </a>
        </nav>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="name">Names</label>
                                <Typeahead
                                    labelKey="name"
                                    id="name"
                                    options={["Photon", "Sami", "Auto", "Erfan", "Samith"]}
                                    placeholder="Choose a name..." />
                            </div>
                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <Typeahead
                                    labelKey="email"
                                    id="email"
                                    options={["khan@gmail.com", "sami@gmail.com", "towhid@gmail.com", "erfan@yahoo.com", "samith@aol.com"]}
                                    placeholder="Choose an email..." />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer>
            <div>
                &copy; { new Date().getFullYear() } All Rights Reserved, Photon Enterprise
            </div>
        </footer>
    </Fragment>
)
export default Home;