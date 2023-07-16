import '../css/Tasks.css';
import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Tasks(props) {

    const [taskName, setTaskName] = useState();
    const [taskDetails, setTaskDetails] = useState();
    const [editInProgress, setEditInProgress] = useState(false);
    const [freakyTaskId, setFreakyTaskId] = useState(0);

    const editTaskById = (index) => {
        setEditInProgress(true);
        setFreakyTaskId(index);
        setTaskName(props.tasks[index].name);
    }

    /* 
        TODO: give more purposeful name that explains what it does
    */
    const saveEditTaskById = () => {
        
        //Send to App.js to update Tasks list state
        props.editTask(freakyTaskId, {name: taskName, details: taskDetails});
        //Reset local textfield edit state
        setTaskName("");
        setTaskDetails("");
        //End editing ->|
        setEditInProgress(false);
    }

    const deleteTaskById = (index) => {
        props.deleteTask(index);
    }

    const updateTaskName = (e) => {
        console.log(e.target.value);
        setTaskName(e.target.value);
    }

    const updateTaskDetails = (e) => {
        setTaskDetails(e.target.value);
    }

    /*
        Disable editing other tasks (disable buttons) while Edit in progress
    */

    return (
    <>
        <div className="taskTitle">
            <h2><strong>Tasks</strong></h2>
        </div>
        <Grid 
            container 
            columns={5}
            className="centeredGrid"
        >
            <div className="Tasks">
            {
                props.tasks.map((t, index) => (
                    <div className='centeredGrid'>
                        <Paper 
                            elevation={3}
                            className='adjacentPadding'
                            sx={{
                                width: 175
                            }}
                            key={index}
                            
                        >
                        <div className="tasksContainer">
                            {
                                (editInProgress && (freakyTaskId === index))
                                ?
                                <TextField
                                    id="outlined-basic"
                                    label="Edit Task Name:"
                                    variant="outlined"
                                    value={taskName}
                                    onChange={updateTaskName}
                                >
                                </TextField>
                                :
                                <strong><p>{t.name}</p></strong>
                            }
                            {
                                (editInProgress && (freakyTaskId === index))
                                ?
                                <TextField
                                    id="outlined-basic"
                                    label="Edit Details:"
                                    variant="outlined"
                                    value={taskDetails}
                                    onChange={updateTaskDetails}
                                >
                                </TextField>
                                :
                                <p>{t.details}</p>
                            }
                        </div>
                            
                            {
                                /*
                                    EDIT
                                */
                            }
                            {
                                (editInProgress && (freakyTaskId === index))
                                ?
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={saveEditTaskById}
                                >
                                    Save
                                </Button>
                                :
                                <Button
                                    variant="text"
                                    className="editButton"
                                    onClick={() => editTaskById(index)}
                                >
                                    Edit
                                </Button>
                            }
                            <Button
                                variant="text"
                                className="deleteButton"
                                onClick={() => deleteTaskById(index)}
                                disabled={editInProgress}
                            >
                                Delete
                            </Button>
                        </Paper>
                        </div>
                    )
                )
                
            }</div>
        </Grid>
    </>
  )
}

export default Tasks;