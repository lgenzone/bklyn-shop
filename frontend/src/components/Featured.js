import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import AntiAging from '../images/anti-aging.png';
import AcneControl from '../images/acne-control.png';
import CleansersAndScrubs from '../images/cleansers-scrubs.png';
import Peptides from '../images/peptides.png';

function Featured(props) {
    const { product } = props;
  
    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5 mb-5">
        {/* Featured 1 */}
        <div className="col">
          <Card>
            <Link to="/antiaging">
              <img src={AntiAging} className="card-img-top" alt="anti-aging" />
            </Link>
          </Card>
        </div>
  
        {/* Featured 2 */}
        <div className="col">
          <Card>
            <Link to="/acnecontrol">
              <img src={AcneControl} className="card-img-top" alt="acne-control" />
            </Link>
          </Card>
        </div>
  
        {/* Featured 3 */}
        <div className="col">
          <Card>
            <Link to="/cleansers">
              <img src={CleansersAndScrubs} className="card-img-top" alt="cleansers" />
            </Link>
          </Card>
        </div>
  
        {/* Featured 4 */}
        <div className="col">
          <Card>
            <Link to="/peptides">
              <img src={Peptides} className="card-img-top" alt="peptides" />
            </Link>
          </Card>
        </div>
      </div>
    );
  }
  
  export default Featured;