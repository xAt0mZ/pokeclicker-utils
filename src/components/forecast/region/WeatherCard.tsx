import { Card, Col, Image, Row } from 'react-bootstrap';

import { generateWeatherImagePath } from '../../../weather/utils';
import { DateWeather } from '../../../weather/Weather';

function LegendRow() {
  return (
    <Row className="align-items-center g-0">
      <Col xs={2}>&nbsp;</Col>
      <Col>00:00</Col>
      <Col>04:00</Col>
      <Col>08:00</Col>
      <Col>12:00</Col>
      <Col>16:00</Col>
      <Col>20:00</Col>
    </Row>
  )
}

interface Props {
  weathers: DateWeather[],
  region: string
}

export function WeatherCard({ weathers, region }: Props) {
  return (
    <Card className="text-center">
      <Card.Header as="h5">
        {region}
      </Card.Header>
      <Card.Header className="px-0">
        <LegendRow />
      </Card.Header>
      {weathers.map(([date, dayWeathers], dIdx) => (
        <Row key={dIdx} className="align-items-center g-0">
          <Col xs={2}>{date}</Col>
          {dayWeathers.map((w, i) => (
            <Col key={i}>
              <Image src={generateWeatherImagePath(w.weather.type)} width="35px" />
            </Col>
          ))}
        </Row>
      ))}
    </Card>
  )
}