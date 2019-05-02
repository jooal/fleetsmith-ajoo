import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../styles/LightboxPage.css";
import API from "../utils/API";

//note: should be a LightboxPage.test.js to test React component 

class LightboxPage extends React.Component {
state = {
  photoIndex: 30,
  isOpen: false,
  images: []
}

//have to push results into this state here
searchGiphy = query => {
  // var tempImage = [];
  API.search(query)
    .then(res => this.setState({ images: res.data.data }))
    // .then(res => {for ( var i=0; i<res.data.data.length; i ++) {tempImage.push(res.data.data[i].images.fixed_height.url)}  })
    .catch(err => console.log(err));
    // this.setState({images: tempImage}, () => console.log(this.state.images));
    
  };

  // default load
  async componentDidMount() {
  //   // if (this.state.search === "") {
    this.searchGiphy("puppies");
  //   // }
  }

renderImages = () => {
  
  let photoIndex = -1;
  const { images } = this.state;
  // console.log("images" + images);
//  this.searchGiphy("puppies");

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex} >
      <figure className="grid">
        <img src={imageSrc.images.fixed_height.url} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}


//need to display lightbox with TITLES 

render() {
const { photoIndex, isOpen, images } = this.state;
console.log("console log images" + JSON.stringify(images[0]));
  return (
     
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>

        {isOpen && (
        <Lightbox 
          mainSrc={images[photoIndex].images.fixed_height.url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          imageTitle={(photoIndex + 1 + "/" + images.length) + " " + images[photoIndex].title} 
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          } 
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            } 
          />
         
        )}
        
         <div>
          </div>
      </MDBContainer>
    );
  }
}

export default LightboxPage;
