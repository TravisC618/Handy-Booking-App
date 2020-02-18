import React from 'react';
import '../../css/browse_tasks/TaskCardContent.css'
import { Location, Calendar } from '../../utils/Icons'

const TaskCardContent = props => {
    return (
        <a href="#"
            class="new-task-list-item new-task-list-item--open">
            <div class="new-task-list-item__header">
                <span class="new-task-list-item__title">Take me to work tomorrow
                morning
                </span>
                <div class="new-task-list-item__price"><span data-ui-test="price">$50</span></div>
            </div>
            <div class="new-task-list-item__body">
                <div class="avatar-img new-task-list-item__avatar">
                    <img
                    src="https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2635472/image-80689ff6486e097bcb8569ba6fae617d.jpg /"
                    alt="" width="32" height="32"/>
                </div>
                <div class="new-task-list-item__location">
                    <Location />
                    <div class="new-task-list-item__detail">Redcliffe
                    QLD</div>
                </div>
                <div class="new-task-list-item__date">
                    <Calendar />
                    <div class="new-task-list-item__detail">Tue, 18 Feb</div>
                </div>
            </div>
            <div class="new-task-list-item__footer">
                <div class="row">
                <span class="new-task-list-item__status col-6">Open</span>
            <span
                class="new-task-list-item__bids col-6">1 offer</span></div>
                </div>
            </a>
    )
}

export default TaskCardContent;