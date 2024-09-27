import { Carousel } from 'react-bootstrap';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
// import video3 from '../assets/videos/video3.mp4';
// import './VideoCarousel.css'; // Import the CSS file

function VideoCarousel() {
  return (
    <Carousel className="video-carousel">
      <Carousel.Item>
        <video className="d-block w-100" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>

      <Carousel.Item>
        <video className="d-block w-100" autoPlay loop muted>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>

      {/* <Carousel.Item>
        <video className="d-block w-100" autoPlay loop muted>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default VideoCarousel;
