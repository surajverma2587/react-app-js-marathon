import axios from 'axios';
import React from 'react';
import Card from './Card';

const getPhotoData = async () => { 
    return {} // Get data from the server
  }
const renderCards = (photos) => {
    return []// create map of rendered cards
}

const renderCard= (photo) =>  {
    return (
        <div className="col-sm-4">
            <Card photo={photo} />
        </div>
    )
}

export { 
    getPhotoData,
    renderCards
}