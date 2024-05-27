import Part from "./Part";

const Contents = ({ parts }) => {

    return (
        <div>
            {parts.map((part) => {
                // eslint-disable-next-line react/jsx-key
                return <Part key={part.id} part={part} />;
            })}
        </div>
    );
};

export default Contents

