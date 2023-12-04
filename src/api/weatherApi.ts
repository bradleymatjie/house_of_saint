const api = {
    key: "8e01601781c2308a4b673cdc9626c7fd",
    base: "https://api.openweathermap.org/data/2.5/",
  }
  
  export function searchPressed(query: any) {
    return fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(res => res.json());
  }

  export function searchByCoordinates(latitude: number, longitude: number) {
    return fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // Log the parsed JSON data
        return data;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  