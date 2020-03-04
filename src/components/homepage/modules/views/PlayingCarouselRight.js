import React from 'react';
import '../../../../css/home/PlayingCarousel-right.css';
import Faker from 'faker'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Location} from "../../../../utils/Icons";

class PlayingCarouselRight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentWillMount() {
        for (let i = 0; i < 50; i++) {
            const user = {
                price: Faker.commerce.price(),
                title: Faker.commerce.productName(),
                avatar: Faker.internet.avatar(),
                location: Faker.address.city(),
            }
            this.setState(prevState => ({
                users: [...prevState.users, user],
            }))
        }
    }

    renderUsers(user) {
        return (
            <div class="client-slide">
                <Card >
                    <div />
                    <CardActionArea>
                        <CardContent>
                            <a class="new-task-list-item new-task-list-item--open">
                                <div class="new-task-list-item__header">
                                    <span class="new-task-list-item__title">{user.title}</span>
                                    <div class="new-task-list-item__price">
                                        <span data-ui-test="price">${user.price}</span>
                                    </div>
                                </div>
                                <div class="new-task-list-item__body">
                                    <div class="avatar-img new-task-list-item__avatar">
                                        <img
                                            src={user.avatar}
                                            alt={user.title}
                                            width="32"
                                            height="32"
                                        />
                                    </div>
                                    <div class="new-task-list-item__location">
                                        <Location />
                                        <div class="new-task-list-item__detail">{user.location}</div>
                                    </div>
                                    <div class="new-task-list-item__date">
                                    </div>
                                </div>
                                <div class="new-task-list-item__footer">
                                    <div class="row">
                                        <span class="new-task-list-item__status col-6">
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
            </div>

        )
    }

    render() {
        return (
            <div>
                <div class="slider-right">
                    <div class="slide-track">
                        {this.state.users.map(user => this.renderUsers(user))}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayingCarouselRight;