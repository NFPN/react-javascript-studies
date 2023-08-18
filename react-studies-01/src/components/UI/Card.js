import "./Card.css";

function Card(props) {

const propClasses = 'card ' + props.className;

  return <div className={propClasses}>{props.children}</div>;
}

export default Card;
