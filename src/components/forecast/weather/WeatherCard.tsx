import { format } from 'date-fns';
import { Card } from 'react-bootstrap';

import { generateWeatherImagePath } from '../../../weather/utils';
import { Weather } from '../../../weather/Weather';

interface Props {
  weather: Weather
}

export function WeatherCard({ weather }: Props) {
  return (
    <Card className="text-center">
      <Card.Header as="h5">
        {weather.weather.name}
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={generateWeatherImagePath(weather.weather.type)} />
      </Card.Body>
      <Card.Footer>{weather.regionName}</Card.Footer>
      <Card.Footer>
        {format(weather.startDate, "dd/MM/yyyy HH:mm")}<br />
        {format(weather.endDate, "dd/MM/yyyy HH:mm")}
      </Card.Footer>
    </Card>
  )
}