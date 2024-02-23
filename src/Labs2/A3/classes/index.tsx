import './index.css';
function classes() {
    const color = 'blue';
    const dangerous = true;

    return (
        <div>
            <h2>Classes</h2>
            <div>
                <br />
                <h3>Three Background Colors We'll Use:</h3>
                <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                    Yellow background     </div>
                <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                    Blue background     </div>
                <div className="wd-bg-red wd-fg-black wd-padding-10px">
                    Red background     </div>
            </div>

            <div>
                <br />
                <h3>Dyamic Blue Background</h3>
                <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                    Dynamic Blue background
                </div>
            </div>

            <div>
                <br />
                <h3>Conditional Formatting of Background</h3>
                <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
                    Dangerous background
                </div>
            </div>

            
        </div>
    );
}

export default classes;
