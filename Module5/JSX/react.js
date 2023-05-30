// React.createElement(type, props, children)
// const h1 = React.createElement('h1', {
//     id: 'heading_1',
//     className: 'heaading'
// }, 'Learning React')


// const h2 = React.createElement('h2', {
//     id: 'heading_2',
//     className: 'heaading'
// }, 'Learning Hooks')

// const container = React.createElement('div', null, h1, h2)

const container = React.createElement("div", null,
    React.createElement('h1', {
        id: 'heading_1',
        className: 'heading',
        onClick: () => {
            console.log('h1');
        }
    }, 'Learning React 2'),
    React.createElement('h2', {
        id: 'heading_2',
        className: 'heading'
    }, 'Learning Hooks 2')
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);