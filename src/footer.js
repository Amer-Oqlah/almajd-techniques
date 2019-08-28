import React, { Component, Fragment } from 'react';


class  Footer extends React.Component{
    render(){
  return (
    <div style={{
        position:'fixed',
        width: '100%',
        height: '17%',
        'font-weight': 'bold',
        "fontSize":"25px",
        'text-align': 'center',
        background: '#7f6ff0',
        color: '#fff',
        bottom:"0px",
        overflow:'hidden'
    }}>
	  <p>  المجد للكمبيوتر <br></br>
   <p2>     تلفون :0772660594  تركيب كاميرات , بيع وتصليح خلويات و لابتوبات </p2>
    </p>
    </div>
  );
}
}

export default Footer;