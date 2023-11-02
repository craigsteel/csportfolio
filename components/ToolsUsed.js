import { Container, Col, Row } from 'react-bootstrap';

const ToolsUsed = () => {
  return (
    <Container>
      <div className="tools">
        <h2>Tools I Use</h2>
        <Row>
          <Col md={{ span: 12 }}>
            <h3>
              Photoshop / Illustrator / INDESIGN / XD / Sketch / InVision / VSC / GITHUB / Asana
            </h3>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ToolsUsed
