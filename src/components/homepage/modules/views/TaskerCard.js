import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../../../css/home/taskerCard.css'


export function TaskerCardOne() {

    return (
        <div>
            <div class="blog-card">
                <div class="meta">
                <div class="photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" }}></div>
                    <ul class="details">
                        <li class="author"><a href="#">Samantha</a></li>
                        <li class="tags">
                            <ul>
                                <li><a href="#">Assembly</a></li>
                                <li><a href="#">Pet care</a></li>
                                <li><a href="#">Gardening</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="description">
                    <h1>Samantha</h1>
                    <h2><i>Specialities: assembly, pet care, gardening</i></h2>
                    <h2>Returning to the workforce as a single mum, Sam had to find something that could be flexible and cover the cost of childcare.</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div className="content">
                                <h5>TRUST</h5>
                                <div className="five-star">
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <h3>4.9 stars from 185 reviews</h3>
                                    <div className="reviews">
                                        <h5>WHAT THE REVIEWS SAY</h5>
                                        <div className="reviews-text">
                                            <h3>Very nice and caring in trying circumstances! Thanks again</h3>
                                            <i>—— Tim S.</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="content">
                                <h5>BADGES</h5>
                                <div className="badge-container">
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-id.png" alt="Digital iD badge" />
                                        <h3>Digital iD</h3>
                                    </div>
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-police.png" alt="Police check badge" />
                                        <h3>Police check</h3>
                                    </div>
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-ikea.png" alt="IKEA badge" />
                                        <h3>IKEA</h3>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <p class="read-more">
                        <a href="#">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export function TaskerCardTwo() {

    return (
        <div>
            <div class="blog-card alt">
            <div class="meta">
                <div class="photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" }}></div>
                    <ul class="details">
                        <li class="author"><a href="#">Emily</a></li>
                        <li class="tags">
                            <ul>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Cleaning</a></li>
                                <li><a href="#">Packing</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="description">
                    <h1>Emily</h1>
                    <h2><i>Specialities: delivery, cleaning, packing</i></h2>
                    <h2>In-between jobs, Emily was looking for a way to earn some extra cash... Maybe even using her clown school skills!</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div className="content">
                                <h5>TRUST</h5>
                                <div className="five-star">
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <h3>5 stars from 6 reviews</h3>
                                    <div className="reviews">
                                        <h5>WHAT THE REVIEWS SAY</h5>
                                        <div className="reviews-text">
                                            <h3>She was an absolute lifesaver. Quick, friendly and super efficient!</h3>
                                            <i>—— Myles B.</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="content">
                                <h5>BADGES</h5>
                                <div className="badge-container">
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-id.png" alt="Digital iD badge" />
                                        <h3>Digital iD</h3>
                                    </div>
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-police.png" alt="Police check badge" />
                                        <h3>Police check</h3>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <p class="read-more" style={{marginTop: 0}}>
                        <a href="#">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export function TaskerCardThree() {

    return (
        <div>
            <div class="blog-card">
                <div class="meta">
                    <div class="photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80')" }}></div>
                    <ul class="details">
                        <li class="author"><a href="#">Brendan</a></li>
                        <li class="tags">
                            <ul>
                                <li><a href="#">Handyman</a></li>
                                <li><a href="#">Electrician</a></li>
                                <li><a href="#">Delivery</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="description">
                    <h1>Brendan</h1>
                    <h2><i>Specialities: handyman, electrician, delivery</i></h2>
                    <h2>A sparky by trade, Brendon jumped onboard when he went back to studying. Here's how Airtasker fit in with his busy lifestyle...</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div className="content">
                                <h5>TRUST</h5>
                                <div className="five-star">
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <h3>5 stars from 305 reviews</h3>
                                    <div className="reviews">
                                        <h5>WHAT THE REVIEWS SAY</h5>
                                        <div className="reviews-text">
                                            <h3>Nice work and will use Brendon again if any other lighting task</h3>
                                            <i>—— Steven Z.</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="content">
                                <h5>BADGES</h5>
                                <div className="badge-container">
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-id.png" alt="Digital iD badge" />
                                        <h3>Digital iD</h3>
                                    </div>
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-police.png" alt="Police check badge" />
                                        <h3>Police check</h3>
                                    </div>
                                    <div className="badge-img">
                                        <img src="https://www.airtasker.com/images/homepage/badge-ikea.png" alt="IKEA badge" />
                                        <h3>IKEA</h3>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <p class="read-more">
                        <a href="#">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
