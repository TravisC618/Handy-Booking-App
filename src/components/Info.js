import React from 'react';
import '../css/info.css';

const Info = props => {
    return (
        
<div class="container">
    <div class="jumbotron">
        <div class="container">
            <h4><strong>ABOUT</strong></h4>
            <h5> We at Content Moderated are able to do new install. Fault finding. Repairs to single phase and multiphass electrical systems. 16 years time served after apprenticeship with loads of experience in Residential.</h5>
          <h4><strong>SKILLS</strong></h4>
            <div class="row">
              
                <div class="col-md-6">
                    
                    <em>LANGUAGES</em>

                    <table>
                        <tr>
                            <th><small class="btn btn-error btn-xs"><em>English</em></small></th>
                        </tr>
                    </table>

                    <em>TRANSPORTATION</em>

                    <table>
                        <tr>
                            <th><small class="btn btn-error btn-xs"><em>Online</em></small></th>
                            <th><small class="btn btn-error btn-xs"><em>Walk</em></small></th>
                            <th><small class="btn btn-error btn-xs"><em>Car</em></small></th>
                        </tr>
                        <tr>
                            <th><small class="btn btn-error btn-xs"><em>Truck</em></small></th>
                        </tr>
                    </table>

                </div>
                <div class="col-md-6">

                    <em>WORK</em>

                    <table>
                        <tr>
                            <th><small class="btn btn-error btn-xs"><em>Electrical Contractor</em></small></th>
                        </tr>
                        <tr>
                            <th><small class="btn btn-error btn-xs"><em>ARC Licenced Aircon Installer</em></small></th>
                        </tr>
                        <tr>
                            <th><small class="btn btn-error btn-xs"><em>ACMA Licenced Cabler</em></small></th>
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