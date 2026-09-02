import { useState, useEffect } from "react"

const Api = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        async function featchWeather() {
            const response = await fetch ("https://api.weatherapi.com/v1/current.json?key=1ebeeff235c94167b6a122057262905&q=batumi")
            const data = await response.json();
            setData(data);
            console.log(data);
        }

        featchWeather()
    }, [])
    
  return (
    <div>Api</div>
  )
}

export default Api
