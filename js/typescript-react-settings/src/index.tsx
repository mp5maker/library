import * as React from "react";
import * as ReactDOM from "react-dom";

// Internationalization
import { I18nextProvider } from 'react-i18next';

import i18n from './locales/i18n';

import { App } from "./app/App";

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App compiler="TypeScript" framework="React" />
    </I18nextProvider>,
    document.getElementById("example")
);