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
      <Card.Body>
        <Card.Img variant="top" src={generateWeatherImagePath(weather.weather.type)} />
      </Card.Body>
      <Card.Footer>{weather.weather.name}</Card.Footer>
    </Card>
  )
}