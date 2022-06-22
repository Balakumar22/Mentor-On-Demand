const SelectBtn = ({ btnName, data, filter }) => {
  console.log(data);

  return (
    <select className="select-btn" defaultValue={btnName}>
      {btnName === "Skills" ? (
        <input type="search" placeholder="Search Skill" />
      ) : (
        <option value={btnName}>{btnName}</option>
      )}
      {data.map((d) => {
        if (btnName === "Skills") {
          return (
            <div className="skill-container">
              <input id={d} type="checkbox" checked={filter ? true : false} />
              <label htmlFor={d}>{d}</label>
            </div>
          );
        }
        return <option value={d}>{d}</option>;
      })}
    </select>
  );
};

export default SelectBtn;
