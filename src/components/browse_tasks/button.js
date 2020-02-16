import React from 'react';
import $ from "jquery";
import { SliderBasicExample } from "./Slider";

class Button extends React.Component {

  render(){

    $("btn").on("click", "[data-stopPropagation]",function(e) {  
      e.stopPropagation();
      console.log('ok');  
  });
    return (
          <div>
          
          <div class="container-fluid py-6">
              <h4>TO BE DONE</h4>
              <ul class="nav nav-tabs nav-justified mb-6" role="tablist">
                <li class="nav-item">
                  <a href="#create-group-InPerson" class="nav-link active" data-toggle="tab" role="tab"
                    aria-selected="true">In person</a>
                </li>
                <li class="nav-item">
                  <a href="#create-group-remotely" class="nav-link" data-toggle="tab" role="tab" aria-selected="false">Remotely</a>
                </li>
                <li class="nav-item">
                  <a href="#create-group-all" class="nav-link" data-toggle="tab" role="tab" aria-selected="false">All</a>
                </li>
              </ul>
              <div class="tab-content" role="tablist">

                <div id="create-group-InPerson" class="tab-pane fade active show" role="tabpanel">
                <div class="form-group">
                  <h4>SUBURB</h4>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter a suburb" />
                </div>
                <div>
                <h4>DISTANCE</h4>
                <SliderBasicExample />
                </div>                     
                </div>
                <div id="create-group-remotely" class="tab-pane fade" role="tabpanel">
                  <h1>Page 2</h1>
                </div>
                <div id="create-group-all" class="tab-pane fade" role="tabpanel">
                  <h1>Page 3</h1>
                </div>
              </div>
          </div>
          


          <hr />
      </div>
    )
}
}

export default Button 


