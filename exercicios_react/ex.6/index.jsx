import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastname='Silva'>
            <Member name='Guilherme'  /> 
            <Member name='Rafael'  /> 
            <Member name='Julia'  /> 
        </Family>      
    </div>
    ,document.getElementById('app'))

