import VideoCarousel from '../components/VideoCarousel';
import Testimonials from '../components/Testimonials';
import PhotoGrid from '../components/PhotoGrid';
import ReviewForm from '../components/ReviewForm';
// import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      <VideoCarousel />
      <Testimonials />
      {/* <Carousel/> */}
      <PhotoGrid />
      <ReviewForm />

    </div>
  );
}

export default Home;
