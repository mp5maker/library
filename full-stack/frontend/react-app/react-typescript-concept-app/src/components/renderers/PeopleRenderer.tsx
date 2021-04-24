import IWidget from "../../interfaces/IWidget";
import Moment from "react-moment";
import IPerson from "../../interfaces/IPerson";

export function PeopleRenderer(props: IPerson) {
  const { firstName, lastName, birthday, eyeColor } = props;
  return (
    <div className="col-12 p-3">
      <div className={"card"}>
        <div className={"card-body"}>
          <p className="card-text">
            {firstName} {lastName}
          </p>
        </div>
        <div className="card-footer text-muted text-right">
          Birthday: <Moment fromNow date={birthday} format={"MMMM, DD YYYY"} />
        </div>
        <div className="card-footer text-muted text-right">
          Eye Color: {eyeColor}
        </div>
      </div>
    </div>
  );
}
