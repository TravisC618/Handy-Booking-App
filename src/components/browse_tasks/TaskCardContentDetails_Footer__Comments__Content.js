import React from 'react';
import $ from 'jquery';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ClampLines from 'react-clamp-lines';
import Link from '@material-ui/core/Link';



class Comment extends React.Component  {

    constructor(props) {
       super(props);
       this.edit = this.edit.bind(this);
       this.save = this.save.bind(this);
       this.remove = this.remove.bind(this);
       this.state = {editing: false};
     }
   
   edit(){
     this.setState({ editing:true })
   }
   
   save(){
     console.log( this.newText.value);
     var newText = this.newText.value;
     this.props.updateCommentFromBoard(newText ,this.props.index);
     this.setState({ editing:false })
   }
   
   remove(){
    this.props.removeCommentFromBoard(this.props.index);  
   }
   
   renderNormalMode(){
     return(
       <div className="commentContainer">
        <div class="row">
           <div class="col-1">
                <div className="comment-icon">
                    <AccountCircleRoundedIcon color="primary" style={{ fontSize: 60 }} />
                </div>
            </div>
                <div class="col-11">
                    <Link href="#" color="inherit">UserName</Link>
                    <div className="commentText">
                        <ClampLines 
                        text={this.props.children} 
                        id="default"
                        lines={1}
                        ellipsis="..."
                        moreText="More"
                        lessText="Less"
                        className="geWFnQ"
                        innerElement="p" 
                        />
                    </div>
                    <div class="commentbuttons">
                    <button onClick={this.remove} className="btn-comment">
                    <Link href="#" color="inherit">Delete</Link>
                    </button>
                    </div>
                </div>
          </div>
       </div>
     );
   }
   
   renderEditingMode(){
     return(
       <div className="commentContainer">
         <div className="commentText">
           <textarea 
             ref={ (input) => { this.newText = input; } } 
                   onChange={this.handleChange}        
                   defaultValue={this.props.children}> 
           </textarea>
         </div>
                       
        <button onClick={this.save} className="btn-comment">
           <span className="fa fa-floppy-o fa-2x"></span>
          </button>
       </div>
     );
     
   }
   
   render(){ 
      if(this.state.editing){ 
        return this.renderEditingMode();
      }else{
        return this.renderNormalMode();
      }
   }
  
 }
 
 
export class CommentBox extends React.Component  {
   
    constructor(props) {
      super(props);
      this.displayComments = this.displayComments.bind(this);
      this.updateComment = this.updateComment.bind(this);
      this.removeComment = this.removeComment.bind(this);
      this.addNewComment = this.addNewComment.bind(this);
      this.state = {comments:[]};
     }
   
   removeComment(idx){
     var arr = this.state.comments;
     arr.splice(idx,1)
     this.setState({comments: arr});
   }
   
   updateComment(newText,idx){
     var arr = this.state.comments;
     arr[idx] = newText;
     this.setState({comments: arr})
   }
   
   addNewComment(){
     var newText = $('#shareCommentText').val();
     if(newText !== ""){
       var arr = this.state.comments;
       arr.push(newText);
       this.setState({comments: arr})
     }
     else alert("Please write a comment to send!")
     
   }
   
     displayComments(text,i){
     return(
       <Comment
         key={i} 
         index={i} 
         removeCommentFromBoard ={this.removeComment} 
         updateCommentFromBoard ={this.updateComment}
         >{text}</Comment>
      );
   }
   render(){
     return(
       <div className="board">
         <div className="shareCommentContainer">
         <div class="row">
             <div class="col-1">
             <div className="comment-icon">
            <AccountCircleRoundedIcon color="primary" style={{ fontSize: 60 }} />
            </div>
            </div>
        
        <div class="col-11">
           <textarea id="shareCommentText" placeholder="Ask a question.."></textarea> 
           <button onClick={this.addNewComment} className="btn btn-send">Send</button>
         </div>
         </div>
         
         </div>
         {this.state.comments.map(this.displayComments)}       
       </div>
     );
   }
   
 }
 