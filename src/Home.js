import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
            <div className="home">
              <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-ES_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB661789540_.jpg" alt="" />

                <div className="home__row">
                  <Product id="1231" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/71Xygne8+qL.jpg" rating={5}/>
                  <Product id="4123" title="Beginning Node.js, Express & MongoDB Development" price={9.99} image="https://m.media-amazon.com/images/I/41lMD31ltzL.jpg" rating={5}/>
                  <Product id="1234" title="RESTful Web APIs: Services for a Changing World" price={14.99} image="https://images-na.ssl-images-amazon.com/images/I/51bh5WwD6yL._SX379_BO1,204,203,200_.jpg" rating={5}/>
                  <Product id="4312" title="RESTful Web APIs: Services for a Changing World" price={12.99} image="https://images-na.ssl-images-amazon.com/images/I/51bh5WwD6yL._SX379_BO1,204,203,200_.jpg" rating={5}/>
                </div>

                <div className="home__row">
                    <Product id="1234" title="Web Scalability for Startup Engineers" price={18.99} image="https://images-na.ssl-images-amazon.com/images/I/41nPpCLRfpL._SX322_BO1,204,203,200_.jpg" rating={5}/>
                    <Product id="3252" title="System Design Interview – An insider's guide, Second Edition" price={16.99} image="https://images-na.ssl-images-amazon.com/images/I/41Dn3RSkPtL._SX402_BO1,204,203,200_.jpg" rating={5}/>
                    <Product id="5512" title="Elements of Programming Interviews in Python: The Insiders' Guide" price={18.99} image="https://images-na.ssl-images-amazon.com/images/I/41WOfByjSPL._SX331_BO1,204,203,200_.jpg" rating={5}/>

                </div>

                <div className="home__row">
                    <Product id="1236" title="Elements of Programming Interviews in Java: The Insiders' Guide" price={13.99} image="https://images-na.ssl-images-amazon.com/images/I/51cUz8hC8iL._SX348_BO1,204,203,200_.jpg" rating={5}/>
                </div>

              </div>
            </div>
          )
}

export default Home
