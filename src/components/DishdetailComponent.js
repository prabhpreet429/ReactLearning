import React, { Component } from 'react'; 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, 
  Media} from 'reactstrap';

class DishDetail extends Component {


      renderComments(comments){
         if (comments != null) {
      let commset = comments.map((comm) => {
        let date = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(Date.parse(comm.date)));
  
        return (
          <ul key={comm.id} className="list-unstyled">
            <li className="comment">{comm.comment}</li>
            <li className="author">
              -- {comm.author}, {date}
            </li>
          </ul>
        );
      });
  
      return (
        
          <div>{commset}</div>
       
      );
    } else {
      return (<div></div>);
    }
  }
      render() {
        
        let selectedDish = this.props.dish;
     
        if (selectedDish != null)
          return(
            <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <Card>
                  <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                  <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div  className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  {this.renderComments(selectedDish.comments)}
              </div>
              </div>
              </div>
          );
        else
          return(
              <div></div>
          );
          
        
      }
}
export default DishDetail;
