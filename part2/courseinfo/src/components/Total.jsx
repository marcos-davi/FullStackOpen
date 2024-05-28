const Total = ({ parts }) => {
    const Sum = parts.reduce((total, part) => total + part.exercises, 0);
    return (
        <div style={{ fontWeight: 'bold' }}>total of {Sum} exercises</div>
    )
}
export default Total