import Contents from "./Contents";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {

    return (
        <>
            <Header course={course.name} />
            <Contents parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};
export default Course
