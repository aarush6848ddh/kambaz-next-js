const hello = () => {
    alert("Hello World!");
}; // declare a function to handle the event

const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id="wd-hello-world-click">
                Hello World!
            </button>
            {/* configure the function call */}
            <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">
                Life is Good!
            </button>
            {/* wrap in function if you need to pass parameters */}
            <button onClick={() => {
                hello();
                lifeIs("Great!");
            }} id="wd-life-is-great-click">
                Life is Great!
            </button>
            {/* wrap in {} if you need more than one Line of code
                calling hello()
                calling LifeIs()
            */}
            <hr/>
        </div>
    );
}

