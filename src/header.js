import React, { Component, Fragment } from 'react';


class  Header extends React.Component{
    render(){
  return (
    <div style={{
        position: 'fixed',
        width: '100%',
        height: '25%',
        'font-weight': 'bold',
        "fontSize":"25px",
        'text-align': 'center',
        background: 'purple',
       color: '#fff',
          }}>
	  <p> Dogara Sports Club نادي دوقرا الرياضي  <br></br>
    </p>
   <img src="images/Dogara_Main.jpg" height="80" width='120'></img><br></br>
   <p2>          (اربد - دوقرا ) اجتماعي ثقافي رياضي &nbsp; </p2> 
  
    </div>
  );
}
}

export default Header;