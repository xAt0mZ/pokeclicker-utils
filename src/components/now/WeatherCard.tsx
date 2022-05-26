import { Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';

import { PokemonType } from '../../pokemon/pokemonType';
import { generateTypeImage } from '../../pokemon/utils';
import { generateWeatherImagePath } from '../../weather/utils';
import { Weather } from '../../weather/Weather';

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
            weather.weather.multipliers.map((w) => (
              <Row className="align-items-center">
                <Col>
                  <Image src={generateTypeImage(w.type)} />{PokemonType[w.type]}
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