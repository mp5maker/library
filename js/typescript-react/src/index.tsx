import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app/App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);