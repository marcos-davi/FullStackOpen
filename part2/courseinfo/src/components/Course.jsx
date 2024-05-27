import Contents from "./Contents";
import Header from "./Header";

const Course = ({ course }) => {

    return (
        <>
            <Header course={course.name} />
            <Contents parts={course.parts} />
        </>
    );
};
export default Course
