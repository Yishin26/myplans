import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            <h5>Notifications</h5>
            <ul
              className="notifications"
              style={{ fontSize: "12pt", lineHeight: "17pt" }}
            >
              {notifications &&
                notifications.map(item => {
                  return (
                    <li key={item.id}>
                      <span className="pink-text">{item.user}</span>
                      <span className="pink-text">
                        {"▶︎ "} &nbsp;{item.content}
                      </span>
                      <p className="grey-text">
                        {moment(item.time.toDate()).fromNow()}
                      </p>
                      <br />
                    </li>
                  );
                })}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
