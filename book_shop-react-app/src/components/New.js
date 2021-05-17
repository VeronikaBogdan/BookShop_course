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
            shop: [],
            date: id 
        };

        this.handleReload = this.handleReload.bind(this);
        //this.handleReload();
    }


    async handleReload(event) {
        const response = await api.shop({ date: ''/*this.state.targetDate*/ });
        this.setState({ shop: response});
    }

    render() {
        return <div>          
            <ul  style={{fontSize: ' 25px', color: '#1F8873', /*bookStyle: 'none',*/ display:'flex',  flexWrap:'wrap' }}>
               {this.state.shop.map(
                   (books) => 
                        <li style={{fontSize: ' 25px', color: 'black',  paddingBottom:'20px', flexDirection:'column' ,textAlign:'left', flex:'1'}} >
                            <div class="comp" style={{paddingLeft: '15px', display: 'flex'}}>
                                <div > <img src="http://placeimg.com/440/280/animals" ></img></div>            
                                <div className="inner" style={{}}>
                                    <div style={{fontFamily: 'Solway',fontSize: '40px'}}> {books.name}</div>
                                    <div style={{fontFamily: 'Solway',fontSize: '20px'}}> {books.name}</div>
                                    <div  style={{fontFamily: 'Solway',fontSize: ' 20px'}}>{books.fname}  {books.year} </div>
                                    {/*STARS*/}                
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star" style={{color: books.color}}></span>
                                    <span class="fa fa-star" style={{color: books.color}}></span>      
                                    {/*<div style={{fontFamily: 'Solway-Light',fontSize: '100%' }}> {books.text} </div>*/}
                                    <div style={{clear:'both'}}></div>
                                    <button type="button" style={{marginTop:'10px', alignSelf: 'flex-end', backgroundColor:'#a94442', padding:'10px', borderRadius:'5px',color:'#FFD600', fontSize:'25px'}}>${books.price}</button>
                                </div>
                            </div>
                        </li>)}                   
            </ul>
            <div style={{clear:'both'}}></div>
            <button type="button"  onClick={this.handleReload} style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px',marginBottom:'20px', borderRadius:'5px',color:'#FFD600', fontSize:'20px', fontFamily: 'Solway-Light'}} >Learn more...</button>
        </div>
        
    }
}     

export default withRouter(shop);