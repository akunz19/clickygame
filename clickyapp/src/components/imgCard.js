import React, {Component} from "react";



class  ImgCard extends Component {
    render() {
    return(
        <div datavalue={this.props.id} bool={this.props.click}>
            <img className="img-card" src={this.props.imgUrl} alt="img"></img>
        </div>
    )
}
}

export default ImgCard 