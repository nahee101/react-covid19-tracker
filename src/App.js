import React from "react";

import { Cards, Chart, CountryPicker } from './components';

// css 
import styles from './App.module.css';

// api
import { fetchData } from "./api";

class App extends React.Component {

    async componentDidMount() {
        const data = await fetchData();

        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;