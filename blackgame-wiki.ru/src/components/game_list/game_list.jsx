import './game_list.css'

function GameList (){
    return (
        <div className="image__container">
            <div className="imagelist__overlay">
                <div className="imagelist__overlay__text">ИГРЫ</div>
                <div className="imagelist__list">
                    <div className="imagelist_leftarrow">
                        <svg width="45" height="143" viewBox="0 0 45 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.3572 116.187C34.9356 116.195 34.5176 116.079 34.1301 115.848C33.7426 115.617 33.3942 115.276 33.1072 114.847L4.17858 74.6281C2.89287 72.8406 2.89287 70.07 4.17858 68.2825L33.1072 28.1531C34.3929 26.3656 36.3857 26.3656 37.6714 28.1531C38.9572 29.9406 38.9572 32.7112 37.6714 34.4987L10.9929 71.5L37.6714 108.591C38.9572 110.378 38.9572 113.149 37.6714 114.936C37.0286 115.83 36.1929 116.277 35.4214 116.277L35.3572 116.187Z" fill="#7E7E7E"/>
                        </svg>
                    </div>
                    <div className="imagelist_games_container">
                        <div className="imagelist__gameimage">

                        </div>
                        <div className="imagelist__gameName">

                        </div>
                    </div>
                    <div className="imagelist_rightarrow">
                    <svg width="45" height="143" viewBox="0 0 45 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.64285 26.8125C10.0644 26.8054 10.4824 26.921 10.8699 27.1518C11.2574 27.3827 11.6058 27.7238 11.8928 28.1531L40.8214 68.3719C42.1071 70.1594 42.1071 72.93 40.8214 74.7175L11.8928 114.847C10.6071 116.634 8.61427 116.634 7.32856 114.847C6.04285 113.059 6.04285 110.289 7.32856 108.501L34.0071 71.5L7.32856 34.4094C6.04285 32.6219 6.04285 29.8513 7.32856 28.0638C7.97142 27.17 8.80713 26.7231 9.57856 26.7231L9.64285 26.8125Z" fill="#7E7E7E"/>
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameList;