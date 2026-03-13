import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
function home (){
  const navigate = useNavigate();
   
  return(
    <div>
      <h1>
      Aula de React com Vite JS
      </h1>

      <button onClick={() => navigate ('/exemplo01/1')}>
        Exemplo 1
      </button>

      <Link to="/exemplo02/2">Exemplo 2</Link>

    </div>
  );
}

export default home;

