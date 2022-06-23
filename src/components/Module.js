export const Module = () => {
    return (
        <div className="module">
            <div className="module-text">
                This block is used to something. Ps do not click (not working)
            </div>
            <div className="module-button">Spin</div>
            <div className="module-future">
                <div className="future-topic">Ideas</div>
                <div className="future-ideas">
                    <div>
                        <span>1</span>. auto import <h5>3d</h5> modeles
                    </div>
                    <div>
                        <span>2</span>. example of <h3>3d</h3> market
                    </div>
                    <div>
                        <span>3</span>. practice with <h3>3d</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
// wanna click to spin the model -> problems with exporting function from the middle code
