
 const PersonForm = ({ onSubmit, name, number }) => {
  return (
    <div>
      <form onSubmit={onSubmit} method="POST">
        <div>
          name: <input value={name.value} onChange={name.onChange} />
        </div>
        <div>
          number: <input value={number.value} onChange={number.onChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

    </div>
  );
};

export default PersonForm
