import axios from 'axios';

// covid19 API
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

        return data.map(({ positive, death, dateChecked: date }) => ({ confirmed: positive, deaths: death, date }));

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
    }
}