import React, { Component } from 'react';
import Film from './film';
import Demo from './images/id.jpg';
import nikto from './images/nikto.jpg';
import mk from './images/mk.jpg';
import angel from './images/angel.jpg';
import nechestiv from './images/nechestiv.jpg';
import lb from './images/lb.jpg';
import ls from './images/ls.jpg';
import mp from './images/mp.jpg';
import sg from './images/sg.jpg';
import zast from './images/zast.jpg';
import zhal from './images/zhal.jpg';
import raya from './images/raya.jpg';
import kong from './images/kong.jpg';
import './Films.css'

const filmsDate=[{"id":460465,"poster_path":mk,"title":"Мортал Комбат"},{"id":399566,"poster_path":kong,"title":"Годзилла против Конга"},{"id":615457,"poster_path":nikto,"title":"Никто"},{"id":567189,"poster_path":zhal,"title":"Без жалости"},{"id":804435,"poster_path":angel,"title":"Ангел мести"},{"id":635302,"poster_path":Demo,"title":"Истребитель демонов: Поезд «Бесконечный»"},{"id":632357,"poster_path":nechestiv,"title":"Нечестивые"},{"id":726684,"poster_path":lb,"title":"Леди Баг и Супер-Кот",},{"id":791373,"poster_path":ls,"title":"Лига справедливости Зака Снайдера"},{"id":813258,"poster_path":mp,"title":"Монстрические питомцы"},{"id":634528,"poster_path":zast,"title":"Заступник"},{"id":527774,"poster_path":raya,"title":"Райя и последний дракон"},{"id":615678,"poster_path":sg,"title":"Сила Грома"}]
class Films extends Component {
  render() {
	return (
	<ul className="films">
            {
                filmsDate.map((film,index) => {
                    return <li key={index} className="film">
                            <img src={film.poster_path} className="film__poster" alt="Poster film" /> 


                            <div className="film__text">
                                <span>{film.title}</span>
                                <br/>
                                <span>{film.zhanr}</span>
								<br/>
                                <button onClick={Film}  dataSend={film}>Забронировать</button>
                            </div>
                        </li>
                })
            }
        </ul>)
  }
}


export default Films