
const todoTitle = 'Call Family'
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, et?";
const date = new Date();
const dateName = date.getDate();
const monthNAme = date.getMonth();
const currentYear = date.getFullYear();

function Card(){
    return  <div className="card">
              <h3 className="cardTitle">{ todoTitle }</h3>
              <p className="cardDesc">{ todoDesc }</p>
              <p className="cardFooter">{ dateName + "/" + monthNAme + "/" + currentYear }</p>
            </div>
}

export default Card;