import React, {Component} from 'react';
import {Figure} from "react-bootstrap";
import Footer from "../Footer";

const me = require('../../assets/itMe.png')

const backAbout = require('../../assets/backAbout.jpg')

const h5 = {
    marginBottom: '.2rem'
};

const text = {
    /*background: 'aliceblue',*/
    /*backgroundImage: `url(${backAbout})`,*/
    borderRadius: '2px',
    display: 'table',
    marginBottom: '50px',
    /*color: '#212529'*/
    color: '#ffffff'
};

const leftimg = {
    borderRadius: '2px',
    float: 'left', /* Выравнивание по левому краю */
    margin: '10px 20px 6px 0' /* Отступы вокруг картинки */
};

class About extends Component {
    render() {
        return (
            <>
                <div className="container" style={text} align="center">
                    <div className="position-relative p-3">
                        <div>
                            <h5 className="mt-0" style={h5}>Хмелевский Егор</h5>
                            <h6 style={{color: '#6c757d'}}>фотограф</h6>
                            <div align="left">
                                <div style={{
                                    backgroundColor: 'rgb(33 37 41 / 36%)',
                                    width: '100%',
                                    height: '0.004em',
                                    marginBottom: '10px'
                                }}/>
                                <Figure>
                                    <Figure.Image
                                        src={me}
                                        height="50px"
                                        style={leftimg}
                                        alt="It's me"
                                    />
                                    <Figure.Caption style={{color: '#ffffff', fontSize: '1.05em'}}>
                                        <br/>Привет, как вы уже поняли
                                        меня зовут <strong>Егор</strong> :D<br/><br/>

                                        Я занимаюсь фотографией уже на протяжении
                                        нескольких лет. На данный момент в основном
                                        репортажной.<br/><br/>

                                        У меня небольшой опыт коммерческих
                                        съёмок и этот сайт сделан как раз
                                        для того, чтобы показать свой уровень
                                        мастерства и найти людей,
                                        желающих попасть в объектив моей камеры.
                                        <br/><br/>

                                        Здесь собранны все фотографии, сделанные
                                        мной с <strong>2019 по 2021 год</strong> в самых разнообразных
                                        жанрах, подробнее можете ознакомиться
                                        в отдельной вкладке сайта.<br/><br/>

                                        Я не стою на месте и постоянно работаю над своим
                                        уровнем съёмки, пробую себя в чём-то новом. Так,
                                        сейчас занимаюсь операторским делом, снимаю клип
                                        для владивостокской группы Grangry Cat (скоро
                                        отснятый материал можно будет посмотреть
                                        в инстаграме).<br/><br/>

                                        <i>Связаться со мной можно в <strong>Telegram</strong> или <strong>Instagram</strong> по ссылкам в правом нижнем углу.
                                            Спасибо за уделённое вами время ;)</i>


                                    </Figure.Caption>
                                </Figure>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default About;