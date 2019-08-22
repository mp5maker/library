// import React, { Fragment } from 'react';
import React from 'react';

import { render } from 'react-dom';

import 'react-bootstrap-typeahead/css/Typeahead.css';
// import { Typeahead } from 'react-bootstrap-typeahead';

import './index.scss';

import 'bootstrap/dist/css/bootstrap.css';

import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';

const toggleMachine = Machine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { TOGGLE: 'active' }
        },
        active: {
            on: { TOGGLE: 'inactive' }
        }
    }
});

export const Index = () => {
    const [current, send] = useMachine(toggleMachine);

    return (
        <button onClick={() => send('TOGGLE')}>
            {current.value === 'inactive'
                ? 'Click to activate'
                : 'Active! Click to deactivate'}
        </button>
    );
};

// const Index = () => (
//     <Fragment>
//         <nav className="navbar navbar-bg bg-dark">
//             <a className="navbar-brand text-white">
//                 Testing
//             </a>
//         </nav>
//         <div className="container-fluid mt-5">
//             <div className="row">
//                 <div className="col">
//                     <Typeahead
//                         labelKey="name"
//                         options={["Photon", "Sami", "Auto", "Erfan", "Samith"]}
//                         placeholder="Choose a state..."
//                     />
//                 </div>
//             </div>
//         </div>
//         <footer>
//             <div>
//                 &copy;  { new Date().getFullYear() } All Rights Reserved, Photon Enterprise
//             </div>
//         </footer>
//     </Fragment>
// )

const root = document.getElementById('root')

render (
    <Index />,
    root
);