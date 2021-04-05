function ContentFull({componentChildren}){
    return (
        <div className="p-grid">
            <div className="p-d-none p-d-md-block p-col-1"></div>
            <div className="p-sm-12 p-md-10 ">
                {componentChildren}
            </div>            
            <div className="p-d-none p-d-md-block p-col-1"></div>
        </div>
    )
}

export default ContentFull;