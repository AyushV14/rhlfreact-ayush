import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Category() {




  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <div className="section-header ml-24">
          <div className="section-straight"></div>
          <p className="section-head">Category</p>
        </div>
        <Link className="view-all-link" to="/media">View All →</Link>
      </div>


    </div>
  );
}
