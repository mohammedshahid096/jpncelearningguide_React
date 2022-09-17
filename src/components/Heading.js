import React from 'react';

function Heading() {
  const styles = {
    fontFamily: 'Rampart One',
    color: "grey"
  }
  return (
    <div className="row" id='headingrow'>
    <div className="col-md-1"><center><img src="https://www.targetadmission.com/img/logos/1676422875.png" alt="JPNCE Logo" /></center></div>
    <div className="col">
    <> <h1 className='mt-3' style={styles}>Jaya Prakash Narayan College of Engineering</h1></> 
    </div>
  </div>
  )
}

export default Heading