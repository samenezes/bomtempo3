import styled from 'styled-components';

export const TasksList = styled.ul`
`;

export const TaskListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    margin-bottom: 10px;
`;

export const WarningText = styled.p`
    color: #483434;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
`;

export const CheckboxCompleted = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    cursor: pointer;

    &:before{
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background-color: #030140;
    }

    &:checked:after{
        content: "";
        display: block;
        width: 5px;
        height: 10px;
        border: solid #f0f0f0;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: relative;
        top: -22px;
        left: 9px;
    }
`;

export const TaskText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    margin-top: 5px;
    color: #0f0f0f;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
`;

export const DeleteButton = styled.button`
    margin-left: 30px;
    border: 0;
    border-radius: 50px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 5px;

    img{
        width: 30px;
        cursor: pointer;
    }
`;