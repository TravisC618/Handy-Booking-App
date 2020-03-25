import React from "react";
import "../../../../css/home/PlayingCarousel-right.css";
import Faker from "faker";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Location } from "../../../../utils/Icons";
import Zoom from "@material-ui/core/Zoom";

class PlayingCarouselRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    for (let i = 0; i < 50; i++) {
      const user = {
        price: Faker.commerce.price(),
        title: Faker.commerce.productName(),
        avatar: Faker.internet.avatar(),
        location: Faker.address.city()
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }

  renderUsers(user) {
    return (
      <div className="client-slide">
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
          <Card>
            <div />
            <CardActionArea>
              <CardContent>
                <a className="new-task-list-item new-task-list-item--open">
                  <div className="new-task-list-item__header">
                    <span className="new-task-list-item__title">{user.title}</span>
                    <div className="new-task-list-item__price">
                      <span data-ui-test="price">${user.price}</span>
                    </div>
                  </div>
                  <div className="new-task-list-item__body">
                    <div className="avatar-img new-task-list-item__avatar">
                      <img
                        src={user.avatar}
                        alt={user.title}
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="new-task-list-item__location">
                      <Location />
                      <div className="new-task-list-item__detail">
                        {user.location}
                      </div>
                    </div>
                    <div className="new-task-list-item__date"></div>
                  </div>
                  <div className="new-task-list-item__footer">
                    <div className="row">
                      <span className="new-task-list-item__status col-6">
                        <div className="five-star">
                          <i className="fas fa-star fa-2x"></i>
                          <i className="total-star">5 Stars</i>
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
              </CardContent>
            </CardActionArea>
          </Card>
        </Zoom>
      </div>
    );
  }

  render() {
    return (
      <div className="slider-right">
        <div className="slide-track">
          {this.state.users.map(user => this.renderUsers(user))}
        </div>
      </div>
    );
  }
}

export default PlayingCarouselRight;
