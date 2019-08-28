import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header.js"
import Footer from "./footer.js"

const items=[
{image:'images/image01.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image02.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image03.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image04.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image05.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image06.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image07.jpg',
              title:'camera 1',
              price:"24"
},
{image:'images/image08.jpg',
              title:'camera 1',
              price:"24"
}
,
{image:'images/image09.jpg',
              title:'camera 1',
              price:"24"
}
,
{image:'images/image10.jpg',
              title:'camera 1',
              price:"24"
}
,
{image:'images/image11.jpg',
              title:'camera 1',
              price:"24"
}
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
					<h3 style={{'paddingTop':"10%"}}>Electronics</h3>
					{items.map((item, index) => {
						return(
						<div class="card" style={{width: 'auto', height: "auto",  float: "left", margin: "25px"}}>
						<img class="card-img-top" src={item.image} style={{height: '15rem'}} alt="Card image cap" />
						<div class="card-body">
						<h5 class="card-title">{item.title}</h5>
						<p class="card-text">{item.price} JD</p>
						{/* <a class="btn btn-primary" style={{margin: '25%', color: "white"}} onClick={this.itemSelected.bind(this, index)}>Add To Cart</a> */}
						</div>
						</div>
						)
					})}
     
				</div>
 

    </div>
  );
}

export default App;
