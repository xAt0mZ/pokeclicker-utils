import { useEffect, useState } from "react";
import { Container, Tabs, Tab } from 'react-bootstrap';

import { WeathersForecast } from './components/forecast/weather/WeathersForecast';
import { WeatherNow } from './components/now/WeatherNow';
import { RegionsForecast } from './components/forecast/region/RegionsForecast';
import { generateForcast, generateWeathers, RegionWeather, Weather } from './weather/Weather';
import { getWeatherForecast, getRegionForecast } from './weather/utils';

import './App.css'

export function App() {
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const [forecast, setForecast] = useState<Weather[]>([]);
  const [regionForecast, setRegionForecast] = useState<RegionWeather[]>([]);
  const [weatherForecast, setWeatherForecast] = useState<Weather[]>([]);

  useEffect(() => {
    const weathers = generateWeathers(new Date());
    const forecast = generateForcast();
    setWeathers(weathers)
    setForecast(forecast);
  }, []);

  useEffect(() => {
    const weatherForecast = getWeatherForecast(forecast);
    setWeatherForecast(weatherForecast);

    const regionForecast = getRegionForecast(forecast);
    setRegionForecast(regionForecast);
  }, [forecast])

  return (
    <Container style={{ maxWidth: '120vh' }}>
      <Tabs variant="pills" defaultActiveKey="now" id="tabs" className="my-3 nav-fill">
        <Tab eventKey="now" title="Weather now">
          <WeatherNow weathers={weathers} />
        </Tab>
        <Tab eventKey="regionForecast" title="Region forecast">
          <RegionsForecast weathers={regionForecast} />
        </Tab>
        <Tab eventKey="weatherForecase" title="Weather forecast">
          <WeathersForecast weathers={weatherForecast} />
        </Tab>
      </Tabs>
    </Container>
  );
}
