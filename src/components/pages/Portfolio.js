import React, {Component, createElement} from 'react';
import Loader from "../Loader";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("./photos.json", {
            method: "GET",
            body: null,
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(typeof result)
                    this.setState({
                        isLoaded: true,
                        items: result["albums"]
                    });
                    //console.log(result)
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div style={{color: 'red'}}>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader/>/*<div>Загрузка...</div>;*/
        } else {
            return (
                <>
                    <p style={{color: 'rgba(255, 255, 255, 0.42)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        В данном блоке сейчас залиты
                        далеко не все фотографии, так что ждите
                        обновлений :D</p>
                    <div className="albums">
                        {
                            // нужно добавить у каждого альбома
                            // по клику открытие альбома с фотографиями
                            items.map(albums =>
                                (
                                    <div className="album" style={{color: '#f8f9fade'}} value={albums[0].title}>
                                        {
                                            albums.map(photo =>
                                                (
                                                    <div>
                                                        <p className="text-albums">{photo.title}</p>
                                                        <img src={photo.url} className="photo" id={photo.id}
                                                             onClick={getOnClick(photo.id)}/>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                ))
                        }

                    </div>
                </>
            );
        }

    }
}

function getOnClick(index) {
    if (index === 1)
        return addAlbum
    else return
}

function addAlbum(e) {
    //console.log(e.target);
    let albums = document.querySelectorAll('div.album');

    //console.log(albums);
    if (!e.target.classList.contains('modal-album')) {
        // console.log(e.target.parentNode.parentNode.children.length)
        let nameAlbum = document.createElement("h4");
        // alert(e.target.parentNode.parentNode.getAttribute('value'));
        nameAlbum.textContent = e.target.parentNode.parentNode.getAttribute('value');
        nameAlbum.classList.add('nameAlbum');
        e.target.parentNode.parentNode.appendChild(nameAlbum);

        // создаём прокрутку на самый верх
        let toTop = document.createElement('div');
        toTop.id = 'btn-to-top';
        toTop.textContent = '^';
        toTop.addEventListener('click', () => {
            e.target.parentNode.parentNode.scrollTop = 0;
        });
        e.target.parentNode.parentNode.appendChild(toTop);

        // работа со всей страницей браузера
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        e.target.parentNode.parentNode.classList.add('modal-album');

        document.body.style.overflow = 'hidden'

        // добавляем крестик, как выход из альбома
        let x = document.createElement("div");
        x.classList.add('cross');
        x.textContent = 'x';
        e.target.parentNode.parentNode.appendChild(x);

        x.addEventListener("click", () => {
            document.querySelector('.modal-album').classList.remove('modal-album')
            document.body.style.overflow = 'auto';
            x.parentNode.removeChild(nameAlbum);
            x.parentNode.removeChild(toTop);
            x.parentNode.removeChild(x);
        })
    }
}

/*window.onload = () => {
    if (!window.opener) {
        document.querySelector('.lds-dual-ring').parentNode.removeChild(document.querySelector('.lds-dual-ring'))
        document.querySelector('.hidden').classList.remove('hidden');
    }
}*/

export default Portfolio;