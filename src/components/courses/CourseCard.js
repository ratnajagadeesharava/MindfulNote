import { PiDotsThreeBold } from "react-icons/pi";


function CourseCard({ courseIcon, courseName, courseType, category }) {

    return (
        <div className="course-card">
            <div className="course_icon_container">
                    {courseIcon}
            </div>
            <div className="course_details">
                <div className="course_text_details">
                    <div className="course_name">
                        <div>{courseName}</div>
                    </div>
                    <div className="course_type">
                        <p className="course_type_type">{courseType}</p>
                        {category ?<p className="course_type_category">{category}</p> : ""}
                    </div>
                </div>
                {category ?<div className="course_action">
                    <PiDotsThreeBold />
                </div> : ""}
            </div>
        </div>
    );
}

export default CourseCard;