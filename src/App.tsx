import React from 'react';
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {theme} from "./mantine/mantine";
import {SignUp} from "./pages/SignUp/SignUp";

function App() {
    return (
        <MantineProvider theme={theme}>
            <SignUp/>
        </MantineProvider>
    );
}

export default App;
