import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';


const ManageItem = () => {
    const [manageItem, setManageItem] = useState([])
    useEffect(() => {
        fetch('https://mysterious-ridge-18976.herokuapp.com/manage')
            .then(res => res.json())
            .then(data => setManageItem(data))

    }, [])

    return (
        <div>
            <div className='products-container container'>
                {
                    manageItem.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }

            </div>
            <div className=' mt-5 d-flex  align-items-center justify-content-center'>
                <Link className='manage-link ' to='/add'> Add Item</Link>
            </div>
        </div>
    );
};

export default ManageItem;