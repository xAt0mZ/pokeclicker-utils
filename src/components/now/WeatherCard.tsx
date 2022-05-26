import { Card } from 'react-bootstrap';

import { generateWeatherImagePath } from '../../weather/utils';
import { Weather } from '../../weather/Weather';

interface Props {
  weather: Weather
}

export function WeatherCard({ weather }: Props) {
  return (
    <Card className="text-center">
      <Card.Header as="h5">{weather.regionName}</Card.Header>
      <Card.Img variant="top" src={generateWeatherImagePath(weather.weather.type)} />
      <Card.Body>
        <Card.Title>{ weather.weather.name }</Card.Title>
      </Card.Body>
    </Card>
  )
}