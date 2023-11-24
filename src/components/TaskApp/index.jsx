import { useEffect, useState } from 'react';
import { AddTasksButton, ButtonContainer, PageButton, TaskForm, TaskInput, Title, LogoContainer } from '../../assets/styles/TaskApp/TaskApp.style';
import { Link } from 'react-router-dom';
import { TaskList } from '../TaskList';
import { v4 as uuidv4 } from 'uuid';
import pending from '../../assets/Images/Icons/pending-icon.png';
import completed from '../../assets/Images/Icons/completed-icon.png';

export function TaskApp() {
    const [tituloList, setTituloList] = useState([]);
    const [tituloInput, setTituloInput] = useState('');
    const [conteudoInput, setConteudoInput] = useState('');
    const [currentPage, setCurrentPage] = useState('adicionadas');

    const handleNameSubmit = (e) => {
        e.preventDefault();

        if (tituloInput.trim() !== '' && conteudoInput.trim() !== '') {
            const newFullName = { id: uuidv4(), nome: `${tituloInput} ${conteudoInput}`, completed: false };
            setTituloList([...tituloList, newFullName]);
            setTituloInput('');
            setConteudoInput('');
        }
    };

    const handleNameComplete = (nameId) => {
        const updatedNames = tituloList.map((name) =>
            name.id === nameId ? { ...name, completed: !name.completed } : name
        );

        setTituloList(updatedNames);
    };
    
    const handleDeleteName = (nameId) => {
        const updatedNames = tituloList.filter((name) => name.id !== nameId);
        setTituloList(updatedNames);
    };    

    const handleActiveNames = () => {
        setCurrentPage('adicionadas');
    };

    const handleCompletedNames = () => {
        setCurrentPage('concluidos');
    };

    const filteredNames = currentPage === 'adicionadas' ? tituloList.filter(name => !name.completed) : tituloList.filter(name => name.completed);

    return (
        <>
            <ButtonContainer>
                <Link to="/notas-adicionadas">
                    <PageButton onClick={handleActiveNames}>Adicionar tarefas<img src={pending} /></PageButton>
                </Link>
                <Link to="/notas-excluidas">
                    <PageButton onClick={handleCompletedNames}>Tarefas excluídas<img src={completed} /></PageButton>
                </Link>
            </ButtonContainer>
            <Title>
                {currentPage === 'adicionadas' ? 'Adicionar tarefas' : 'Tarefas excluídas'}
            </Title>
            {
                currentPage === 'adicionadas' ? (
                    <TaskForm onSubmit={handleNameSubmit}>
                        <TaskInput
                            type="text"
                            placeholder="Digite o título"
                            value={tituloInput}
                            onChange={(e) => setTituloInput(e.target.value)}
                        />
                        <TaskInput
                            type="text"
                            placeholder="Digite o conteúdo"
                            value={conteudoInput}
                            onChange={(e) => setConteudoInput(e.target.value)}
                        />
                        <AddTasksButton type="submit">+</AddTasksButton>
                    </TaskForm>
                ) : null
            }
            <TaskList
                tasks={filteredNames}
                onCompleteTask={handleNameComplete}
                onDeleteTask={handleDeleteName}
                currentPage={currentPage}
            />
        </>
    );
}