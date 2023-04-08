export default function Data(props) {
    return (
        <div className="info-country">
            <img id="flag" src={props.img} alt=""/>
            <div className="info">
                <h2 id="country">{props.country}</h2>
                <ul>
                    <li><h4>Population: <span id="population">{props.population}</span></h4></li>
                    <li><h4>Region: <span id="region">{props.region}</span> </h4> </li>
                    <li><h4>Capital: <span id="capital">{props.capital}</span></h4></li>
                </ul>
            </div>
        </div>
    )
}