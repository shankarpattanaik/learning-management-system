import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Web Developer",
      message:
        "This e-learning platform completely transformed the way I code. The tutorials are clear and easy to follow.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Lee",
      position: "Designer",
      message:
        "The interactive lessons and practical examples helped me improve my design skills faster than I expected.",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 3,
      name: "Sofia Patel",
      position: "Data Analyst",
      message:
        "I love the variety of courses available. Each section keeps me engaged and motivated to keep learning.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Full Stack Developer",
      message:
        "The platform is user-friendly and the instructors explain concepts very clearly. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Real Experiences from Our Students</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
