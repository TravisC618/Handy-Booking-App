import React, { Component, useReducer } from "react";
import VirtualizedList from "../../utils/Table";
import TaskMapDisplay from "./TaskMap";
import ContentDisplay from "./TaskCardContentDetails_Display";
import { DetailContext, detailReducer, initialState } from "../../hooks/detailReducer";


export const BrowseTasksContent = () => {
    const [detail, dispatch] = useReducer(detailReducer, initialState);
  
    return (
      <DetailContext.Provider value={{ detailState: detail, detailDispatch: dispatch }}>
            <div class="row">
                <div class="col-4">
                <div className="infinite-scroll-list">
                    <VirtualizedList />
                </div>
                </div>
                <div class="col-8">
                    <TaskMapDisplay />
                    <ContentDisplay />
                </div>
            </div>
      </DetailContext.Provider>
    );
  };


// export class BrowseTasksContent extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isToggleOn: true,
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//           isToggleOn: !prevState.isToggleOn,
//           display: prevState.isToggleOn,
//         }));
//       }
    
//     render() {
//       return (


//         <div class="row">
//         <div class="col-4">
//           <div className="infinite-scroll-list">
//             <VirtualizedList />
//           </div>
//         </div>
//         <div class="col-8">

//         <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>
//           <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>

//           <TaskMap display={this.state.isToggleOn}/>
//           <ContentDisplay isToggleOn={this.state.display}/>
//         </div>
//       </div>
//       );
//     }
// }
