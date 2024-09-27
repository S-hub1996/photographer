import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { text: "Amazing photography!", author: "John Doe" },
    { text: "Loved working with you!", author: "Jane Smith" },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="testimonial"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <p>&quot;{testimonial.text}&quot;</p>
          <p>- {testimonial.author}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Testimonials;
