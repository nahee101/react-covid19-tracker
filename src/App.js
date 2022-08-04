import React from "react";

import { Cards, Charts, CountryPicker } from './components';

// css 
import styles from './App.module.css';

// api
import { fetchData } from "./api";

import coronaImg from './img/covid19.jpg'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(country) {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.img} src={coronaImg} alt='covid-19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App;