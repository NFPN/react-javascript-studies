import "./ExpenseDate.css";

function ExpanseDate(props) {
  var lang;

  if (window.navigator.languages) lang = window.navigator.languages[0];
  else lang = window.navigator.userLanguage || window.navigator.language;

  const day = props.date.toLocaleString(lang, { day: "2-digit" });
  const month = props.date.toLocaleString(lang, { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date-day">{day}</div>
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
    </div>
  );
}

export default ExpanseDate;
