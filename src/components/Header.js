import './header.css'
// 3 cuz im a student now of itmo damn it
export const Header = () => {
    const fastReload = async () => {
        window.location.reload(false)
    }
    return (
        <div className="header">
            <div className="header-block">
                <img
                    src="favicon.ico"
                    style={{ cursor: 'pointer' }}
                    onClick={fastReload}
                />
            </div>
            <div className="header-block"></div>
            <div className="header-block" style={{ cursor: 'pointer' }}>
                React
            </div>
            <div className="header-block" style={{ cursor: 'pointer' }}>
                Three
            </div>
        </div>
    )
}
