import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header.js"
import Footer from "./footer.js"

const items=[
{image:'images/Dogara_Main.jpg',        
           
},
{image:'images/1.jpeg'},
{image:'images/2.jpeg'},
{image:'images/3.jpeg'},
{image:'images/4.jpeg'},
{image:'images/6.jpeg'},
{image:'images/7.jpeg'},
{image:'images/8.jpeg'},
{image:'images/9.jpeg'},
{image:'images/10.jpeg'},
{image:'images/11.jpeg'},
{image:'images/12.jpeg'},
{image:'images/13.jpeg'},
{image:'images/14.jpeg'},
{image:'images/15.jpeg'},
{image:'images/16.jpeg'},
{image:'images/18.jpeg'},
{image:'images/19.jpeg'},
{image:'images/20.jpeg'},
{image:'images/21.jpeg'},
{image:'images/22.jpeg'},

]
function App() {
  return (
   <div>
    <div >
     
    <Header/>
    </div>
    
     <div class="container" style={{
  background: 'white',
  margin: '0 auto',
  padding: '5%',
  width: '75%',
  display :"grids",
  overflow:"auto",
  

  
                                     }}>
					<h3 style={{'paddingTop':"10%"}}></h3>
					{items.map((item, index) => {
						return(
						<div class="card" style={{width: 'auto', height: "auto",  float: "left", margin: "25px"}}>
						<img class="card-img-top" src={item.image} style={{height: '15rem'}}  />
						<div class="card-body">
						<p class="card-text">{item.price} </p>
						{/* <a class="btn btn-primary" style={{margin: '25%', color: "white"}} onClick={this.itemSelected.bind(this, index)}>Add To Cart</a> */}
						</div>
						</div>
						)
					})}
     
				</div>
 
        <div >
     
     <Footer/>
     </div>
    </div>
    
  );
}

export default App;
