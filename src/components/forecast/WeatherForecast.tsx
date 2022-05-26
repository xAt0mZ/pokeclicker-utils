import { Row, Col } from 'react-bootstrap';

import { Weather } from '../../weather/Weather';

import { WeatherCard } from './WeatherCard';

interface Props {
  weathers: Weather[]
}

export function WeatherForecast({ weathers }: Props) {
  return (
    <Row xs={1} md={6} className="g-1" style={{ maxHeight: '50vh', height: '50vh' }}>
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