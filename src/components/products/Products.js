import React, { useEffect, useState } from 'react';
import './Products.css'
import { useParams } from 'react-router';
import phone from '../../assets/iphone.svg'
import Loading from '../loading/Loading';
import RadarExample from '../charts/Radar';
import { Tabs, Select, Space } from 'antd';
import ProductDetails from '../product-spec/ProductDetails';
import Comments from '../comments/Comments';

const { TabPane } = Tabs;
const { Option } = Select;
function Products(props) {
    const [loading, setLoading] = useState(true);
    const tabPosition = 'right';
    let { query } = useParams();

    useEffect(()=>{
        // Fetch all data from backend
        // set loading false 
        setTimeout(function() {
            setLoading(false);
        },2500)

    },[])
  return (
    <div className="products">
        {
            loading? (
                <div className="loading">
                    <Loading/>
                </div>
            ):
            (
            <div className="products-details">
                <Tabs tabPosition={ tabPosition }>
                    <TabPane tab="Info" key="1">
                        <div className="tab container">
                            <ProductDetails/>
                        </div>
                    </TabPane>
                    <TabPane tab="Graphics" key="2">
                        <div className="tab container">
                            <div>
                                <div className="container">
                                <RadarExample/>
                                TESTSETESTSTESETSETSETS
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Reviews" key="3">
                        <div className="tab container">
                            <Tabs type="card" size='small'>
                                <TabPane tab="Positive " key="1">
                                    <Comments/>
                                </TabPane>
                                <TabPane tab="Negative " key="2">
                                    <Comments/>
                                </TabPane>
                                <TabPane tab="Card Tab 3" key="3">
                                    Content of card tab 3
                                </TabPane>
                            </Tabs>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            )
        }
    </div>
  );
}

export default Products;
