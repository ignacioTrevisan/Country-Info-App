const { default: axios } = require("axios");
const { response } = require("express");

const GetAllCountries = async (req, res = response, next) => {
    try {
        const { data } = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.status(200).json(
            data
        )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'An error ocurred during fetching all countries, please retry other time later'
        })
    }
}
const GetCountryInfo = async (req, res = response, next) => {
    try {
        const { code } = req.params;
        // Fetching country borders using the country code

        const { data: bordersCountries } = await axios.get(`${process.env.URL_API_COUNTRY_INFO}/${code}`);
        // Fetching population data for all countries
        const { data: population } = await axios(`${process.env.URL_API_COUNTRIES_POPULATION}`);

        // Fetching country flags using country codes
        const { data: flags } = await axios(`${process.env.URL_API_COUNTRIES_FLAGS}`);

        // Try to find the flag using iso3 code
        let CountryFlags = flags.data.find((f) => f.iso3 === code);

        // If flag is not found with iso3, try to find it using iso2
        if (!CountryFlags) {
            CountryFlags = flags.data.find((f) => f.iso2 === code);
        }


        // Try to find the population using the iso3 code of the flag
        let CountryPopulation = population.data.find((c) => c.code === code);

        // If population is not found using code, try to find it using iso2
        if (!CountryPopulation) {
            CountryPopulation = population.data.find((c) => c.code === CountryFlags?.iso2);
        }
        // If population is not found using iso3, try to find it using iso2
        if (!CountryPopulation) {
            CountryPopulation = population.data.find((c) => c.code === CountryFlags?.iso3);
        }

        // If it is still not found, we try with the country name
        if (!CountryPopulation) {
            CountryPopulation = population.data.find((c) => c.country === bordersCountries.commonName);
        }


        // If population is not found at all, return an error response
        if (!CountryPopulation) {
            return res.status(404).json({
                ok: false,
                msg: `Population data not found for country with code: ${code}`
            });
        }

        res.status(200).json({
            commonName: bordersCountries.commonName,
            officialName: bordersCountries.officialName,
            countryCode: bordersCountries.countryCode,
            region: bordersCountries.region,
            borders: bordersCountries.borders,
            population: CountryPopulation?.populationCounts ?? 'No population information available for this country',
            ...(CountryFlags && CountryFlags.flag && { flag: CountryFlags.flag })  // Asegúrate de que CountryFlags exista antes de acceder a 'flag'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'An error ocurred during fetching country info, please retry other time later'
        })
    }
}

module.exports = {
    GetAllCountries,
    GetCountryInfo
}
