export default function PassingFunctions({ theFunction }: { theFunction: () => void }) {
    // function passed in as a parameter
    return (
        <div id="wd-passing-functions">
            <h2>Passing Functions</h2>
            <button onClick={theFunction}
            className="btn btn-primary">
                Invoke the Function
            </button>
            {/* invoking function with no arguments */}
            <hr/>
        </div>
    );
}

