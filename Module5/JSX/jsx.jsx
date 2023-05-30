var count = 0;
const container = (
    <div>
        <h1 id="heading_1" className="heading"
            onClick={() => console.log(`h1 - ${++count}`)}
        >Learning React</h1>
        <h2 id="heading_2" className="heading">Learning Hooks</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);