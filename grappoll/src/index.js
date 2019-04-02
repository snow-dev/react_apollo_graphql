import React from 'react';
import ReactDOM from 'react-dom';

import './resources/styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

/* Apollo section imports */
import {ApolloProvider} from "react-apollo";
import ApolloClient  from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io/"
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
