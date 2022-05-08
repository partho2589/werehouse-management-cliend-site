import React, { useEffect, useState } from 'react';
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
        </div>
    );
};

export default ManageItem;