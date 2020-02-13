import React from 'react';
import '../../css/details/info.css';

const Info = props => {
    return (   
        <div class="container" id="info">
            <div class="jumbotron">
                <div class="container" id="info">
                    <h4><strong>ABOUT</strong></h4>
                    <h5> We at Content Moderated are able to do new install. Fault finding. Repairs to single phase and multiphass electrical systems. 16 years time served after apprenticeship with loads of experience in Residential.</h5>
                    <h4><strong>SKILLS</strong></h4>
                    <div class="row" id="info-row">

                        <div class="col-md-6">

                            <em>LANGUAGES</em>

                            <table>
                                <tr>
                                    <th><small class="btn btn-secondary btn-sm"><em>English</em></small></th>
                                </tr>
                            </table>

                            <em>TRANSPORTATION</em>

                            <table>
                                <tr>
                                    <th><small class="btn btn-secondary btn-sm"><em>Online</em></small></th>
                                    <th><small class="btn btn-secondary btn-sm"><em>Walk</em></small></th>
                                    <th><small class="btn btn-secondary btn-sm"><em>Car</em></small></th>
                                </tr>
                                <tr>
                                    <th><small class="btn btn-secondary btn-sm"><em>Truck</em></small></th>
                                </tr>
                            </table>

                        </div>
                        <div class="col-md-6">

                            <em>WORK</em>

                            <table id="info-table">
                                <tr>
                                    <th><small class="btn btn-secondary btn-sm"><em>Electrical Contractor</em></small></th>
                                </tr>
                                <tr>
                                    <th><small class="btn btn-secondary btn-sm"><em>ARC Licenced Aircon Installer</em></small></th>
                                </tr>
                                <tr>
                                    <th><small class="btn btn-secondary btn-sm"><em>ACMA Licenced Cabler</em></small></th>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info;