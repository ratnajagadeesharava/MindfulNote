import "./Course.css";
import React from 'react';
import CourseCard from "./CourseCard";
function Course() {
    const topics = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Frontend"
        },
        {
            id: 3,
            name: "Coding"
        },
        {
            id: 4,
            name: "Game Development"
        },
        {
            id: 5,
            name: "Backend"
        }
    ];

    const course_list = [
        {
            id: 1,
            courseIcon: "📝",
            courseName: "React",
            courseType: "Frontend",
           category: "Development"
        },
        {
            id: 2,
            courseIcon: "📝",
            courseName: "Angular",
            courseType: "Frontend",
            category: "Development"
        },
       
        {
            id: 4,
            courseIcon: "📝",
            courseName: "Node",
            courseType: "Backend",
            category: "Development"
        },
        {
            id: 5,
            courseIcon: "📝",
            courseName: "Express",
            courseType: "Backend",
            category: "Development"
        },
        {
            id: 6,
            courseIcon: "📝",
            courseName: "MongoDB",
            courseType: "Backend",
            category: "Development"
        },
        {
            id: 7,
            courseIcon: "📝",
            courseName: "Python",
            courseType: "Coding",
            category: "Programming Language"
        },
       
        {
            id: 9,
            courseIcon: "📝",
            courseName: "C++",
            courseType: "Coding",
            category: "Competitive Programming"
        },
        {
            id: 10,
            courseIcon: "📝",
            courseName: "Unity",
            courseType: "Game Development",
            category: "Development"
        },
       
    ]
    return (
        <div className="container course">
            <div className="course__title_container">
                <div className="mange_course_heading">
                    <h1 className="manage_heading">Manage self-paced courses</h1>
                    <p class="manage_para">Add and manage your self-paced courses</p>
                </div>
                <div className="course_search">
                    <input type="text" placeholder="Search  courses" className="search_input" />
                </div>
                <div className="topic_container">
                    <ul className="topic_list">
                        {topics.map((topic) => (
                            <li className="topic_item" key={topic.id}>{topic.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="course_list">
                    <div className="course_list_heading">
                        <h2 className="course_list_title">New Course</h2>
                    </div>
                    <div className="course_list_container">
                        <CourseCard courseIcon="➕" courseName="React" courseType="Frontend" category="" />
                    </div>
                </div>
                <div className="course_list">
                    <div className="course_list_heading">
                        <h2 className="course_list_title">My Courses</h2>
                    </div>
                </div>
                <div className="course_list_container">
                    {course_list.map((course) => (
                        <CourseCard key={course.id} courseIcon={course.courseIcon} courseName={course.courseName} courseType={course.courseType} category={course.category} />
                    ))}
                    </div>

            </div>
        </div>
    );
}

export default Course;