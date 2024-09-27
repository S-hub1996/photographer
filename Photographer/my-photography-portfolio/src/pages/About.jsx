import { Container, Row, Col, Image } from 'react-bootstrap';
// import photographerImage from '../assets/images/photographer.jpg';  // Placeholder image, replace with actual one

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={'https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} rounded fluid alt="Photographer's portrait" />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p>Hello! I&apos;m [Your Name], a passionate photographer with over [X] years of experience capturing moments that tell a story. I specialize in portrait, wedding, and event photography, and my mission is to create images that resonate with emotions and beauty.</p>
          
          <p>Photography is not just a job for me—it&apos;s a way of seeing the world, and I love helping my clients preserve their most cherished memories. I believe in capturing candid, natural moments and turning them into timeless pieces of art.</p>
          
          <h3>My Photography Philosophy</h3>
          <p>I approach each project with creativity, attention to detail, and a dedication to understanding my clients&apos; needs. Whether it&apos;s a quiet moment during a wedding or the joy of a family reunion, I strive to capture the essence of every occasion.</p>
          
          <p>My goal is to make the process enjoyable, relaxed, and to deliver photographs that will be treasured for years to come.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
