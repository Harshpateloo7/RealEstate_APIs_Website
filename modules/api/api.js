// APIs URL
const propertyUrl = "https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116&CurrentPage=1&RecordsPerPage=2&SortOrder=A&SortBy=1&CultureId=1&NumberOfDays=0&BedRange=0-0&BathRange=0-0&RentMin=0"
const attractionUrl = "https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=500&lat=49.8844&lon=-97.14704"
// PropertyList funcation
async function getPropertyList() {
  let reqUrl = `${propertyUrl}`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "realty-in-ca1.p.rapidapi.com",
        "useQueryString": true,
        "X-RapidAPI-Key": process.env.RAPID_CLIENT_ID
      }
    }
  );
  return await response.json();
}
// Attractionlist function
async function getAttractionList() {
  let reqUrl = `${attractionUrl}`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
        "X-RapidAPI-Key":process.env.RAPID_CLIENT_ID
      }
    }
  );
  return await response.json();
}

module.exports = {
  getPropertyList,
  getAttractionList
}