import { useEffect, useState } from "react";
import { Container, Tabs, Tab } from 'react-bootstrap';

import { generateForcast, generateWeathers, Weather } from './weather/Weather';
import { WeatherNow } from './components/now/WeatherNow';
import { WeatherForecast } from './components/forecast/WeatherForecast';

import './App.css'

export function App() {
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const [forecast, setForecast] = useState<Weather[]>([]);

  useEffect(() => {
    const weathers = generateWeathers(new Date());
    const forecast = generateForcast();
    setWeathers(weathers)
    setForecast(forecast);
  }, []);

  return (
    <Container style={{ maxWidth: '120vh' }}>
      <Tabs variant="pills" defaultActiveKey="now" id="tabs" className="my-3">
        <Tab eventKey="now" title="Now">
          <WeatherNow weathers={weathers} />
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          <WeatherForecast weathers={forecast} />
        </Tab>
      </Tabs>
    </Container>
  );
}
