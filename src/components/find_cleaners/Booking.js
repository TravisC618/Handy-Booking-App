import React from 'react';
import '../../css/find_cleaners/booking.css';
import { DatePicker } from 'office-ui-fabric-react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import oven from '../../img/icons/oven.png';
import cabinets from '../../img/icons/kitchen.png';
import windows from '../../img/icons/window.png';
import vacuum from '../../img/icons/vacuum.png';

initializeIcons(/* optional base url */);

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isCertainDay: true};
    }

    handleDatePicker = event => {
        this.setState({ isCertainDay: event.target.value === "certain" ? false : true });
    }

    render () {
        return (
            <div className="booking-block col-sm-12 col-md-6">
                <div className="booking-tabs">
                    <h3 className="booking-tabs__title">See how little it could cost...</h3>
                    <div className="info-block">
                        <div className="info-block__question">
                            <i className="fas fa-bed" />
                            <label>How many bedrooms do you have?</label>
                        </div>
                        <div className="btn-group" role="group" aria-label="Bedroom Number">
                            <button type="button" className="btn btn-primary">1</button>
                            <button type="button" className="btn btn-primary">2</button>
                            <button type="button" className="btn btn-primary">3</button>
                            <button type="button" className="btn btn-primary">4</button>
                            <button type="button" className="btn btn-primary">5+</button>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="info-block__question">
                            <i className="fas fa-bath" />
                            <label>And how many bathrooms do you have?</label>
                        </div>
                        <div className="btn-group" role="group" aria-label="Bedroom Number">
                            <button type="button" className="btn btn-primary">1</button>
                            <button type="button" className="btn btn-primary">2</button>
                            <button type="button" className="btn btn-primary">3+</button>
                        </div>
                    </div>

                    <div className="info-block end-of-lease-form">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="end-of-lease-check"/>
                            <label className="form-check-label" htmlFor="end-of-lease-check">
                                This is an end-of-lease clean?
                            </label>
                        </div>
                    </div>
                    
                    <div className="info-block optional-cleaned">
                        <div className="info-block__question">
                            <i className="fas fa-list-alt" />
                            <label>Do you need any of these cleaned?</label>
                        </div>
                        <div className="selected-block">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="oven-check" value="oven" />
                                <img src={oven} alt="oven" />
                                <label className="form-check-label" htmlFor="oven-check">
                                    Oven
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="cabinets-check" value="cabinets" />
                                <img src={cabinets} alt="cabinets" />
                                <label className="form-check-label" htmlFor="cabinets-check">
                                    Cabinets
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="windows-check" value="windows" />
                                <img src={windows} alt="windows" />
                                <label className="form-check-label" htmlFor="windows-check">
                                    Windows
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="carpet-check" value="carpet" />
                                <img src={vacuum} alt="vacuum" />
                                <label className="form-check-label" htmlFor="carpet-check">
                                    Carpet
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <i className="fas fa-map-marker-alt" />
                        <label>Where do you need the cleaning?</label>
                        <input className="form-control postcode-input" id="inputPostcode" placeholder="Enter a postcode" />
                    </div>

                    <div className="info-block">
                        <div className="info-block__question">
                            <i className="far fa-calendar-check" />
                            <label>When do you need it done?</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={event => this.handleDatePicker(event)} 
                            name="dateOptions" type="radio" id="today-check" value="today" />
                            <label className="form-check-label" htmlFor="today-check">
                                Today
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={event => this.handleDatePicker(event)} 
                            name="dateOptions" type="radio" id="certain-check" value="certain" />
                            <label className="form-check-label" htmlFor="certain-check">
                                By a certain day
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={event => this.handleDatePicker(event)} 
                            name="dateOptions" type="radio" id="within-a-week-check" value="within a week" defaultChecked />
                            <label className="form-check-label" htmlFor="within-a-week-check">
                                Within 1 week
                            </label>
                        </div>
                        <DatePicker disabled={this.state.isCertainDay}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Booking;