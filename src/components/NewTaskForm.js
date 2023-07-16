import '../css/NewTaskForm.css';
import React, { useState } from 'react';

import { TextField, Button } from '@mui/material';
import { Paper } from '@mui/material';


function NewTaskForm(props) {

    const [taskName, setTaskName] = useState("");
    const [taskDetails, setTaskDetails] = useState("");

    const submitTask = () => {
        if(taskName != null && taskName != undefined) {
            props.setTask(taskName, taskDetails);
            setTaskName("");
            setTaskDetails("");
        }
    }

    return (
        <div>
            <Paper
                elevation={3}
                className='newTaskCard'
            >
                <h2>New Task</h2>
                <TextField 
                    id="outlined-basic" 
                    label="Task name" 
                    variant="outlined"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                
                <Button 
                    className="Button"
                    variant="contained"
                    onClick={submitTask}
                >
                    Submit
                </Button>
                <div>
                    <h5>Details</h5>
                    <TextField 
                        id="outlined-basic" 
                        label="Enter some details.." 
                        variant="outlined"
                        sx={{
                            width: '24vw'
                        }}
                        value={taskDetails}
                        onChange={(e) => setTaskDetails(e.target.value)}
                    />
                </div>
            </Paper>
        </div>

  )
}

export default NewTaskForm;