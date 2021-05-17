import React from 'react';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import moment from 'moment'
import Moment from 'react-moment';


const api = new Api.DefaultApi()

class shop extends React.Component {

    constructor(props) {
        super(props);
        const id =  this.props.match?.params.id || moment().format('LLLL');
        console.log(id);

        

        this.state = { 
            shop: [{q: "asdf"}, {q: "2"}, {q: "3"}],
            date: id 
        };

        this.handleReload = this.handleReload.bind(this);
        this.handleReload();
    }


    async handleReload(event) {
        const response = await api.shop({ date: ''/*this.state.targetDate*/ });
        this.setState({ shop: response});
    }
    /*"fname", "name", "text", "price", "year", "number", "color"*/

    render() {
        return <div>          
            <ul  style={{fontSize: ' 25px', color: '#1F8873', /*bookStyle: 'none',*/ display:'flex', flexDirection: 'column', }}>
               {this.state.shop.map(
                   (books) => 
                        <li style={{fontSize: ' 25px', color: 'black',  paddingBottom:'20px',  textAlign:'left', flex:'1'}} >
                            <div class="comp" style={{paddingLeft: '15px', display: 'flex'}}>
                                <div > <img src="http://placeimg.com/540/380/nature" ></img></div>            
                                <div className="inner">
                                    <div style={{fontFamily: 'Solway',fontSize: '40px'}}> {books.name}</div>
                                    <div style={{fontFamily: 'Solway',fontSize: '20px'}}> {books.name}</div>
                                    <div  style={{fontFamily: 'Solway',fontSize: ' 20px'}}>{books.fname}  {books.year} </div>
                                    {/*STARS*/}                
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star" style={{color: books.color}}></span>
                                    <span class="fa fa-star" style={{color: books.color}}></span>      
                                    <div style={{fontFamily: 'Solway-Light',fontSize: '100%' }}> {books.text} </div>
                                    <div style={{clear:'both'}}></div>
                                    <button type="button" style={{marginTop:'10px', alignSelf: 'flex-end', backgroundColor:'#a94442', padding:'10px', borderRadius:'5px',color:'#FFD600', fontSize:'25px'}}>${books.price}</button>
                                </div>
                            </div>
                        </li>)}                   
            </ul>
            <div style={{clear:'both'}}></div>
        </div>
        
    }
}     

export default withRouter(shop);