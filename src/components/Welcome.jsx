import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Welcome extends Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
          <>
            <div class="jumbotron bg-dark text-light d-flex justify-content-center flex-column align-items-center">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
          </>
      );
    }
  }

  export default Welcome;
