import { Container, Row, Col } from 'react-bootstrap';

function Services() {
  return (
    <Container>
      <h2 className="my-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <h3 id="portrait">Portrait Photography</h3>
          <p>We offer professional portrait photography services to capture your personality and style in stunning images. Whether it&apos;s personal portraits or professional headshots, we deliver high-quality results.</p>
        </Col>
        <Col md={4}>
          <h3 id="wedding">Wedding Photography</h3>
          <p>We specialize in wedding photography, ensuring that every special moment of your big day is captured beautifully. From candid shots to traditional posed photos, we create memories that last a lifetime.</p>
        </Col>
        <Col md={4}>
          <h3 id="event">Event Photography</h3>
          <p>Whether it&apos;s a corporate event, a birthday party, or a family reunion, we provide expert event photography services to document your special occasions in the best possible way.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
