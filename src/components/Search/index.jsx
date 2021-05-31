import "./index.css";

const search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const [search] = e.target.elements;
    let str = String(search.value);
    str = str.trim().toLocaleLowerCase();
    str = str.charAt(0).toUpperCase() + str.substring(1);
    props.setSearch(str);
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input name="search" type="text" className="input-search" />
      <button type="submit" className="button-search">
        Search
      </button>
    </form>
  );
};

export default search;
