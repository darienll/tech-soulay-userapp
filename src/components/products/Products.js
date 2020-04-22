import React, { useEffect } from 'react';
import './Products.css'
import { useParams } from 'react-router';
function Products(props) {
    let { query } = useParams();
  return (
    <div className="Products">
        { query }
    </div>
  );
}

export default Products;
