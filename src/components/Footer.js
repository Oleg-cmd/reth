import './footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-block">
                    <div className="footer-text">our advantages</div>
                    <div className="footer-content">speed</div>
                    <div className="footer-content">picture</div>
                    <div className="footer-content">easy</div>
                </div>
                <div className="footer-block">
                    <div className="footer-text">our contacts</div>
                    <div className="footer-content">@OlegSelanta</div>
                    <div
                        className="footer-content"
                        href="mailto:olega.selanta@gmail.com">
                        olega.selanta@gmail.com
                    </div>
                    <div className="footer-content">Minsk, Belarus</div>
                </div>
                <div className="footer-block">
                    <div className="footer-text">something else</div>
                    <div className="footer-content">wanna taste ?</div>
                    <div className="footer-content">connecting libs</div>
                    <div className="footer-content">have a fun :)</div>
                </div>
            </div>
        </div>
    )
}
