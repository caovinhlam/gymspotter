const TypeBubble = (props) => {
  const { types } = props;

  return (
    <div className="type-bubble-wrapper">
          {types.map((type, typeIndex) => (
              <p key={typeIndex} className="type-bubble">{type}</p>
      ))}
    </div>
  );
};

export default TypeBubble;
