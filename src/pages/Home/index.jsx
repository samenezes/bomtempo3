import { HomeContainer, HomeTitulo, HomeButton } from "../../assets/styles/Home/Home.style";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <HomeContainer>
            <HomeTitulo>Prova final - Artur Bomtempo</HomeTitulo>
            <Link to="/notas-adicionadas"><HomeButton>Adicionar tarefa</HomeButton></Link>
            <Link to="/notas-excluidas"><HomeButton>Tarefas excluídas</HomeButton></Link>
        </HomeContainer>
    );
}