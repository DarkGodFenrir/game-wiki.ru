import './game_list.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from '../news_list/news_list';

function GameList (){
    const [gameData, setGameData] = useState([]); // стейт для хранения данных игр
    const [backgroundImage, setBackgroundImage] = useState('');
    // const [imagesArray, setImages] = useState(0);

    useEffect(() => {
        // Выполняем GET запрос к серверу при помощи axios при загрузке компонента
        axios.get('http://94.103.85.179:5000/api/games')
            .then(response => {
                setGameData(response.data); // обновляем стейт с данными игр
                if (response.data.length > 0) {
                    setBackgroundImage(`url(http://94.103.85.179:5000/images/${response.data[0]['Картинка']})`);
                }
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []); // useEffect с пустым зависимостями - запустится только один раз при монтировании компонента

    const containerStyle = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh', // Высота контейнера
        position: 'relative',
        backgroundColor: '#212C31', // Задаем цвет фона
        backgroundRepeat: 'no-repeat', // Запрещаем повторение фонового изображения
        transition: 'background-image 0.5s ease'
    };

    const handleGameItemClick = (image) => {
        setBackgroundImage(`url(http://94.103.85.179:5000/images/${image})`);
    };

    return (
        <div>
            <div className="image__container" style={containerStyle}>
            <div className="imagelist__overlay">
                <div className="imagelist__overlay__text">Последние обновления</div>
                <div className="imagelist__list">
                    <div className="imagelist__games">
                        {gameData.map(game => (
                            <div key={game['id Игры']} className="imagelist_games_container" onClick={() => handleGameItemClick(game['Картинка'])}>
                                <div className="imagelist__gameimage">
                                    <img src={`http://94.103.85.179:5000/images/${game['Картинка']}`} />
                                </div>
                                <div className="imagelist__gameName">{game['Название_игры']}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="news_list_container">
            <NewsList />
        </div>
        </div>
        
    )
}

export default GameList;