import { Row, Col } from 'react-bootstrap';

import { Weather } from '../../../weather/Weather';

import { WeatherCard } from './WeatherCard';

interface Props {
  weathers: Weather[]
}

export function WeathersForecast({ weathers }: Props) {
  return (
    <Row xs={1} md={6} className="g-3">
      {
        weathers.map((w, i) => (
          <Col key={i}>
            <WeatherCard weather={w} />
          </Col>
        ))
      }
    </Row>
  )
}