import React from 'react'
import ReactDOM from 'react-dom' //web develop

console.log('haha');

// const element = React.createElement('h1',{id: 'box', title: 'haha'},'Hello Wrold');
// console.log(element);

const element = React.createElement('ul', {id:'demo', className:'box'}, 
    [
        React.createElement('li', {id:'demo', className:'box'}, 'Yinan'),
        React.createElement('li', {id:'demo', className:'box'},'yinan')
    ]
)

//1.element 2.container
ReactDOM.render(element, document.getElementById('root'));