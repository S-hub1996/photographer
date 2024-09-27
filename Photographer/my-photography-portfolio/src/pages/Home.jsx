import VideoCarousel from '../components/VideoCarousel';
import Testimonials from '../components/Testimonials';
import PhotoGrid from '../components/PhotoGrid';
import ReviewForm from '../components/ReviewForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <VideoCarousel />
      <Testimonials />
      <PhotoGrid />
      <ReviewForm />
      <Footer />
    </div>
  );
}

export default Home;
