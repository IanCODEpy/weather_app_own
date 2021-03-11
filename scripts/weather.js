const key = "TMltiL9WWtSBPnHGBVx4NWGrIfxPr5bp";

//Get the city first
const getCity = async(city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const q = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + q);
    const data = await response.json();

    return data[0].Key;
};



// Get the weather with location key
const getWeather = async(locID) =>{

    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const q = `${locID}?apikey=${key}`;

    const response = await fetch(base + q);
    const data = await response.json();

    return data;
}
