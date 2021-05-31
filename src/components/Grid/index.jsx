import Card from "../Card/index";
import Search from "../Search";
import "./index.css";

const grid = (props) => {
  return (
    <>
      <div className="grid-city">
        <Search setSearch={props.setSearch} />
        <Card
          city={props.city}
          error={props.error}
          loading={props.loading}
          className="card"
        />
      </div>
    </>
  );
};

export default grid;
