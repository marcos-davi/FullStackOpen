const Total = ({ parts }) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0);
   
    return (
        <div style={{ fontWeight: 'bold' }}>total of {sum} exercises</div>
    )
}
export default Total