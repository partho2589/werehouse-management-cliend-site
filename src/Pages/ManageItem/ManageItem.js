import React, { useEffect, useState } from 'react';

const ManageItem = () => {
    const [manageItem, setManageItem] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/manage')
        .then(res => res.json())
        .then(data =>setManageItem(data))
    },[])
    
    return (
        <div>
           {
               manageItem.map(item =><>
               <h4>Name: {item.name}</h4>
               </>)
           }
        </div>
    );
};

export default ManageItem;