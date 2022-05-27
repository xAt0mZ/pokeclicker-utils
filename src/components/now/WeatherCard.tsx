import { Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';

import { generateWeatherImagePath } from '../../weather/utils';
import { Weather } from '../../weather/Weather';
import { Badge } from '../badge/Badge';

interface Props {
  weather: Weather
}

export function WeatherCard({ weather }: Props) {
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        {weather.regionName}
      </Card.Header>
      <Card.Header>
        <Stack direction="horizontal">
          <span className="m-auto">{weather.weather.name}</span>
          <Image src={generateWeatherImagePath(weather.weather.type)} width="40px" className="m-auto" />
        </Stack>
      </Card.Header>
      <Card.Body>
        <Container>
          {weather.weather.multipliers.length > 0 &&
            weather.weather.multipliers.map((w, idx) => (
              <Row className="align-items-center" key={idx}>
                <Col xs={8}>
                  <Badge type={w.type} />
                </Col>
                <Col>x {w.multiplier}</Col>
              </Row>
            ))
          }
          {weather.weather.multipliers.length === 0 && "No bonus"}
        </Container>
      </Card.Body>
    </Card>
  )
}