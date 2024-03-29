import './index.css';

const Animation = () =>  {
    return (
        <ul>
            <li>
                <div id="easing"><span></span></div>
                <h4>Easing</h4>
            </li>
            <li>
                <div id="parenting"><span></span><span></span></div>
                <h4>Parenting</h4>
            </li>
            <li>
                <div id="obscuration"><span></span></div>
                <h4>Obscuration</h4>
            </li>
            <li>
                <div id="parallax"><span></span></div>
                <h4>Parallax</h4>
            </li>
            <li>
                <div id="dimension"></div>
                <h4>Dimentionality</h4>
            </li>
            <li>
                <div id="transformation"></div>
                <h4>Transformation</h4>
            </li>
            <li>
                <div id="dollyZoom">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <h4>Dolly & Zoom</h4>
            </li>
            <li>
                <div id="masking"><span></span></div>
                <h4>Masking</h4>
            </li>
        </ul>
    );
}

export {Animation};
