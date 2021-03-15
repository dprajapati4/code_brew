const singleCafe = (props) => {
  const cafe = props.cafe;
  const { url, location, name, rating, image_url } = cafe;
  const { display_address } = location;
  return (
    <div style={{ border: "2px solid black", display: "flex"}}>
      <img width="100px" height="100px" src={image_url} alt="cafe" />
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
