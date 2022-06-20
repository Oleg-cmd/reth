export const Module = () => {
    return (
        <div className="module">
            <div className="module-text">
                This block is used to something. Ps do not click (not working)
            </div>
            <div className="module-button">
                <div>Spin</div>
            </div>
            <div className="module-future">
                <div className="future-topic">Ideas</div>
                <div className="future-ideas">
                    <div>
                        <span style={{ color: 'red' }}>1</span>) auto import{' '}
                        <span style={{ color: 'aqua' }}>3</span>d modeles
                    </div>
                    <div>
                        <span style={{ color: 'red' }}>2</span>) example of{' '}
                        <span style={{ color: 'aqua' }}>3</span>d market
                    </div>
                    <div>
                        <span style={{ color: 'red' }}>3</span>) practice with{' '}
                        <span style={{ color: 'aqua' }}>3</span>d
                    </div>
                </div>
            </div>
        </div>
    )
}
// wanna click to spin the model -> problems with exporting function from the middle code
