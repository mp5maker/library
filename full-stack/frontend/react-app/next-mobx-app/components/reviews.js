import React from "react";
import { observer } from "mobx-react";
import get from 'lodash/get'

function List({ data }) {
    return (
        <li className="list-group-item">
            <div className="float-left">{data.review}</div>
            <div className="float-right">
                { data.stars }
            </div>
        </li>
    );
}

@observer
class Reviews extends React.Component {
    render() {
        const store = get(this.props, 'store', {})
        const reviewList = get(store, "reviewList", []);

        return (
            <div className="reviewsWrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-comments" /> Reviews
                            </div>
                            <ul className="list-group list-group-flush">
                                {reviewList.map((e, i) => (
                                    <List key={i} data={e} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Reviews;
