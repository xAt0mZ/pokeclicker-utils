import { Row, Col } from 'react-bootstrap';

import { RegionWeather } from '../../../weather/Weather';

import { WeatherCard } from './WeatherCard';

interface Props {
  weathers: RegionWeather[]
}

export function RegionsForecast({ weathers }: Props) {
  return (
    <Row xs={1} md={2} className="g-3">
      {weathers.map(([region, regionWeathers]) => (
        <Col key={region}>
          <WeatherCard weathers={regionWeathers} region={region} />
        </Col>
      ))}
    </Row>
  )
}