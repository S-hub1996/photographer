import { useState } from 'react';

function ReviewForm() {
  const [formData, setFormData] = useState({ name: '', review: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    setFormData({ name: '', review: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Your Review"
        value={formData.review}
        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
