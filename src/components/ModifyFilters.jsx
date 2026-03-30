import "../index.css"

export default function ModifyFilters () {
    return (
        <div className="modify-filters">
            <h1>discover your pokemon</h1>

            <div className="api-filters">
                <button>x all types</button>
                <button>x all gender</button>
                <button>x all generation</button>
                <button>+ add your own filter</button>
            </div>
        </div>
    );
}