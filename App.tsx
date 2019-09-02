import React from "react";
import { bootstrap } from "@redux/bootstrap";

import { Provider } from "react-redux";
import { Shell } from "@pages/Shell";

const store = bootstrap();

const App = () => {
    return (
        <Provider store={store}>
            <Shell />
        </Provider>
    );
};

export default App;
