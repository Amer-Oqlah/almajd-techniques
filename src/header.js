import React, { Component, Fragment } from 'react';


class  Header extends React.Component{
    render(){
  return (
    <div style={{
        position: 'fixed',
        width: '100%',
        height: '20%',
        'font-weight': 'bold',
        "fontSize":"25px",
        'text-align': 'center',
        background: 'purple',
       color: '#fff',
          }}>
	  <p> Dogara Sports Club نادي دوقرا الرياضي  <br></br>
    </p>
    <p2>  ( اربد  دوقرا- (اجتماعي . ثقافي . رياضي  </p2>  <br></br>
     <p6>Email: mohammed.shlool77@gmail.com </p6> &nbsp;&nbsp;&nbsp; <p6>Phone: 00962787777017-00962787086986</p6> 
   
  
    </div>
  );
}
}

export default Header;