import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder = 'Add a Task'
                        value={props.description}
                        onChange={props.handleChange}></input>
        </Grid>

         <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>                       
        </Grid>
    </div>
)