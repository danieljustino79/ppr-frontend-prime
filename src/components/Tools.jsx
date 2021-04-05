import Code from "./shared/Code";

function Tools(){
    return (
        <div>
            <h2>PrimeReact responsive Media query</h2>
            <ul>
                <li>sm	Breakpoint of phones.	576px</li>
                <li>md	Breakpoint of tablets.	768px</li>
                <li>lg	Breakpoint of notebook.	992px</li>
                <li>xl  Breakpoint of desktop.	1200px</li>
            </ul>
            CSS
            <p>p-d: prime-display</p>

            
            <h2>Content.jsx</h2>
            Template / Layout
            <Code text={`<div className="p-grid">
    <div className="p-d-none p-d-md-block p-col-1"></div>
    <div className="p-sm-12 p-md-10 ">
        {componentChildren}
    </div>            
    <div className="p-d-none p-d-md-block p-col-1"></div>
</div>`} />
https://betterprogramming.pub/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568
        </div>
    )

}

export default Tools;