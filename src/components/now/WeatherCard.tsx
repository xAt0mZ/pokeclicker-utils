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
      <Card.Header as="h5">
        <Stack direction="horizontal">
          {weather.regionName}
          <Image src={generateWeatherImagePath(weather.weather.type)} width="40px" className="ms-auto" />
        </Stack>
      </Card.Header>
      <Card.Header className="text-center">{weather.weather.name}</Card.Header>
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