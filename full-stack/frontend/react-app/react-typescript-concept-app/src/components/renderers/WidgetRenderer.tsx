import IWidget from "../../interfaces/IWidget";
import Moment from "react-moment";

export function WidgetRenderer(props: IWidget) {
  const {
    isSpecialCard,
    title,
    description,
    rating,
    created,
    updated,
    id,
  } = props;
  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? "card specialCard" : "card"}>
        <div className={"card-body"}>
          <h4 className={"card-title"}>{title}</h4>
          <p className="card-text">{description}</p>
          <p className="card-text font-italic">Rating: {rating}</p>
        </div>
        <div className="card-footer text-muted text-right">
          created: <Moment fromNow date={created} />
        </div>
        <div className="card-footer text-muted text-right">
          updated: <Moment fromNow date={created} />
        </div>
      </div>
    </div>
  );
}
