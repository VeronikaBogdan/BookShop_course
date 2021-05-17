import './App.css';
import React from 'react';
import Best from './components/BestSeller';
/*import Tour from './components/Tour'
import logo from "./img/Logo.png";*/
import HP_SR from "./img/HarryPotter_SecretRoom.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation
} from 'react-router-dom';


function App() {
  return (

    <Router>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id="header" style={{background: '#FFD600'}}>
        <div class="burger">
          <Link to={'/'}><h1 style={{fontWeight: 'bolder', color: '#a94442', letterSpacing: '10px', fontSize: '300%'}}>Книжный магазин</h1></Link>	
	      </div>
        <nav class="menu" style={{display: 'flex'}}>
          <ul class="active" style= {{fontSize: '100%' ,display: 'flex'}}>
            <Link to={'/'}><li><a href="#" class="text-danger" style={{fontSize: '100%', flex: 1, color: '#a94442'}}><strong>Главная</strong></a></li></Link>
            <Link to={'/book'}><li><a style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Бестселлеры</a></li></Link>
            <Link to={'/book'}><li><a style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Главные новинки</a></li></Link>
            <li><a  style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Художественная литература</a></li>
            <li><a style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Нехудожественная литература</a></li>
            <li><a style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Фэнтэзи и фантастика</a></li>
            <li><a style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Детская литература</a></li>
            <li><a style={{fontSize: '100%', flex: 1, color: '#a94442'}}>Учебная литература</a></li>
          </ul>	
      	</nav>
      </div>

      <div className="App">
        <section>
          <Switch>
            <Route path="/book">
              <div class="palka" style={{fontSize: ' 30px', color: '#FFD600', backgroundColor: 'brown', textAlign: 'left', paddingLeft: '30px', marginBottom: '10px'}}>Бестселлеры</div>
              <Best />
              
            </Route>
            <Route path="/">
            <div class="palka" style={{fontSize: '30px', color: '#FFD600', backgroundColor: 'brown',  texAalign: 'left', paddingLeft: '0px', marginBottom: '10px'}}>Популярная литература</div>
            <div   class="main" style={{display: 'flex', flexWrap: 'wrap'}}>
              <div class="text2" style={{flex: 1}}>				
                <a href="#"><img class="img2" src="https://img1.wbstatic.net/big/new/2350000/2350125-1.jpg" title="Цветы для Эджернона" alt="Цветы для Эджернона" /></a>
                <div class="about2" >
                  <a href="#"><h2>&laquo;Цветы для Элджернона&raquo;</h2></a>
                  <p style={{marginBottom:'20px', fontSize:'22px'}}>Дэниел Киз</p>
                  <button type="button" style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px', borderRadius:'5px',color:'#FFD600', fontSize:'20px'}}>$5</button>
                </div>
              </div>
              <div class="text2" style={{flex: 1}}>				
                <a href="#"><img class="img2" src={HP_SR} title="Гарри Поттер и Тайная команата" alt="Гарри Поттер и Тайная комната" /></a>
                <div class="about2" >
                  <a href="#"><h2>&laquo;Гарри Поттер и Тайная комната&raquo;</h2></a>
                  <p style={{marginBottom:'20px', fontSize:'22px'}}>Джоан Кэтлин Роулинг</p>
                  <button type="button" style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px', borderRadius:'5px',color:'#FFD600', fontSize:'20px'}}>$5</button>
                </div>
              </div>
              <div class="text2" style={{flex: 1}}>				
                <a href="#"><img class="img2" src="https://img4.labirint.ru/rc/3f2379ff6ef11cd385b1f463760a2a18/220x340/books16/150746/cover.jpg?1280394613" title="Гарри Поттер и Дары Смерти"  alt="Гарри Поттер и Дары Смерти" /></a>
                <div class="about2" >
                  <a href="#"><h2>&laquo;Гарри Поттер и Дары Смерти&raquo;</h2></a>
                  <p style={{marginBottom:'20px', fontSize:'22px'}}>Джоан Кэтлин Роулинг</p>
                  <button type="button" style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px', borderRadius:'5px',color:'#FFD600', fontSize:'20px'}}>$5</button>
                </div>
              </div>
              <div class="text2" style={{flex: 1, borderBottom: '#FFD600 solid 0px'}}>				
                <a href="#"><img class="img2" src="http://loveread.ec/img/photo_books/25113.jpg" title="Элита" alt="Элита" /></a>
                <div class="about2" >
                  <a href="#"><h2>&laquo;Элита&raquo;</h2></a>
                  <p style={{marginBottom:'20px', fontSize:'22px'}}>Кира Касс</p>
                  <button type="button" style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px', borderRadius:'5px',color:'#FFD600', fontSize:'20px'}}>$5</button>
                </div>
              </div>
              <div class="text2" style={{flex: 1, borderBottom: '#FFD600 solid 0px'}}>				
                <a href="#"><img class="img2" src="https://img4.labirint.ru/rc/afbe5ddd5edf6b94864c5d46590ef472/220x340/books73/723974/cover.jpg?1603823112" title="Мастер и Маргарита" alt="Мастер и Маргарита" /></a>
                <div class="about2" >
                  <a href="#"><h2>&laquo;Мастер и Маргарита&raquo;</h2></a>
                  <p style={{marginBottom:'20px', fontSize:'22px'}}>Мастер и Маргарита</p>
                  <button type="button"  style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px', borderRadius:'5px',color:'#FFD600', fontSize:'20px'}}>$5</button>
                </div>
              </div>
              <div class="text2" style={{flex: 1, borderBottom: '#FFD600 solid 0px'}}>				
                <a href="#"><img class="img2" src="https://s1.livelib.ru/boocover/1000454863/200/577c/boocover.jpg" title="451 по Фаренгейту"  alt="451 по Фаренгейту" /></a>
                <div class="about2" >
                  <a href="#"><h2>&laquo;451 по Фаренгейту&raquo;</h2></a>
                  <button type="button"  style={{maxWidth: '50%', backgroundColor:'#a94442', padding:'5px', borderRadius:'5px',color:'#FFD600', fontSize:'20px'}}>$5</button>
                </div>
              </div>
            </div>              
              {/*<Dino />*/}
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Route path="/book">
              <Redirect to="/book/fantasy" />
          </Route>
        </section>      
      </div> 

     <footer style={{fontSize: '22px'}}>
        <div id="name">
          <ul class="footer_left">
            <li>Dm.@gmail.com</li>
            <li>
              <h5><b>&copy;Dm, 2021</b></h5>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>Доставка</li>
            <li>Оплата</li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>Новости Dm</li>
            <li>Вакансии</li>
          </ul>
        </div>
     </footer>

    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
