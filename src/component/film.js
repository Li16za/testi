import React from 'react';
var MestoRyd=' ';
var Film = ({data}) => (		
		<div>
			<form>
				<p>Фильм:{data.title}</p>
				<p>Жанр : <p>{data.Released}</p> </p>
				<p>Место и ряд : {MestoRyd}
				<table>
					<tr align="center">Экран</tr>
					<tr>
						<td>1 ряд</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 1 место 1 ряд"}>1</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 2 место 1 ряд"}>2</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 3 место 1 ряд"}>3</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 4 место 1 ряд"}>4</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 5 место 1 ряд"}>5</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 6 место 1 ряд"}>6</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 7 место 1 ряд"}>7</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 8 место 1 ряд"}>8</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 9 место 1 ряд"}>9</button>
						</td>
					</tr>
					<tr>
					<td>2 ряд</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 1 место 2 ряд"}>1</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 2 место 2 ряд"}>2</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 3 место 2 ряд"}>3</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 4 место 2 ряд"}>4</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 5 место 2 ряд"}>5</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 6 место 2 ряд"}>6</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 7 место 2 ряд"}>7</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 8 место 2 ряд"}>8</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 9 место 2 ряд"}>9</button>
						</td>
					</tr>
					<tr>
					<td>3 ряд</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 1 место 3 ряд"}>1</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 2 место 3 ряд"}>2</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 3 место 3 ряд"}>3</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 4 место 3 ряд"}>4</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 5 место 3 ряд"}>5</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 6 место 3 ряд"}>6</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 7 место 3 ряд"}>7</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 8 место 3 ряд"}>8</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 9 место 3 ряд"}>9</button>
						</td>
					</tr>
					<tr>
						<td>4 ряд</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 1 место 4 ряд"}>1</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 2 место 4 ряд"}>2</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 3 место 4 ряд"}>3</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 4 место 4 ряд"}>4</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 5 место 4 ряд"}>5</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 6 место 4 ряд"}>6</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 7 место 4 ряд"}>7</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 8 место 4 ряд"}>8</button>
						</td>
						<td>
							<button onClick={MestoRyd=MestoRyd+" 9 место 4 ряд"}>9</button>
						</td>
					</tr>
				</table>
					  </p>
				<p>Стоимость : 400 </p>
				<p>Количество : 
				<select name="count" required="required">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
	<option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
	<option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
	<option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
	<option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
	<option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
					</select>
					 </p>
				<button>бронировать</button>
			</form>
		</div>
);

export default Film;