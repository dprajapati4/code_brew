const singleCafe = (props) => {
  const cafe = props.cafe;
  const { url, location, name, rating, image_url } = cafe;
  const { display_address } = location;
  return (
    <div style={{display: "flex"}}>
      <img
      src={image_url}
      className="br1 h3 w3 dib" alt="cafe"/>
      <div style={{paddingLeft: "10px"}}>
      <span>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
        {"  "}
        {rating}
      </span>
      <br />
      <span>{display_address}</span>
      </div>
    </div>
  );
};

export default singleCafe;
