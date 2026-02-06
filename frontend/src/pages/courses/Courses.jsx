import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  console.log(courses);
  return (
<div className="courses">
  <h2>Available Courses</h2>

  <div className="course-container">
    {courses && courses.length > 0 ? (
      courses.map((e) => <CourseCard key={e._id} course={e} />)
    ) : (
      <div className="empty-state">
        <span className="empty-icon">🎓</span>
        <p>No courses available yet</p>
      </div>
    )}
  </div>
</div>

  );
};

export default Courses;
