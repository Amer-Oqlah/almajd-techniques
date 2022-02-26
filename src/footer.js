import React, { Component, Fragment } from 'react';


class  Footer extends React.Component{
    render(){
  return (
    <div style={{
        position:'fixed',
        width: '100%',
        height: '10%',
        'font-weight': 'bold',
        "fontSize":"25px",
        'text-align': 'center',
        background: '#7f6ff0',
        color: '#fff',
        bottom:"0px",
        overflow:'hidden'
    }}>
	
   <p2>  رســـالــتــنـــا:
تنشئة جيل رياضي ملتزم أخلاقيًا ناجح عمليًا منافس رياضيًا ممتنًا لناديه منتميًا لوطنه
عن طريق دعم برامجنا الرياضية والاجتماعية والتربوية والتعليمية والنفسية وتأهيل الموارد البشرية فنيا وإداريا وتحقيق شراكة مجتمعية متميزة   </p2>
    
    </div>
  );
}
}

export default Footer;