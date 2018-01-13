import React, { Component } from 'react';

import Slide from '../layout/slide';
import Month from '../layout/month';
import Works from '../layout/last-works';
import Atheme from '../layout/atheme';
import SliderTwo from '../layout/sliderTwo';
import Blogs from '../layout/blogs';
import Expiriens from '../layout/expiriens';
import Team from '../layout/team';

class Home extends Component {
    render() {
        let sliderConfig = {
          indicators: false
        };

        return (
            <div>
              <Slide sliderConfig={sliderConfig} />
              <Month />
              <Works />
              <Atheme />
              <SliderTwo />
              <Blogs />
              <Expiriens />
              <Team />
            </div>
        );
    }
}

export default Home;
