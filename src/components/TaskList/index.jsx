import { CheckboxCompleted, DeleteButton, TasksList ,TaskListItem, TaskText, WarningText } from '../../assets/styles/TaskList/TaskList.style';
import trash from '../../assets/Images/Icons/trash-icon.png';

export function TaskList({ tasks, onCompleteTask, onDeleteTask, currentPage }) {
    return (
        <TasksList>
            {tasks.length === 0 ? (
                <WarningText>
                    {currentPage === 'adicionadas' ? 'Não há notas adicionadas.' : 'Não há notas excluídas.'}
                </WarningText>
            ) : (
                tasks.map((task) => (
                    <TaskListItem key={task.id}>
                        <TaskText>{task.nome}</TaskText>
                        <DeleteButton onClick={() => onCompleteTask(task.id)}><img src={trash} /></DeleteButton>
                    </TaskListItem>
                ))
            )}
        </TasksList>
    );
}