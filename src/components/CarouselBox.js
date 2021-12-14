import React, {Component} from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
const img1 = require('../assets/Home/1.jpg')
const img2 = require('../assets/Home/2.jpg')
const img3 = require('../assets/Home/3.jpg')
const img4 = require('../assets/Home/4.jpg')
const img5 = require('../assets/Home/5.jpg')
const img6 = require('../assets/Home/6.jpg')

class CarouselBox extends Component {
    render() {
        let listImgs = [
            {title: "Grangry Cat, съёмки клипа", desc: "Grangry Cat, съёмки клипа 12.12.2021" , url: img1},
            {title: "Фалаза", desc: "Фалаза 13.10.2020" , url: img2},
            {title: "Открытый микрофон",
                desc: "22.10.2021 Студенческий открытый микрофон" , url: img3},
            {title: "ПримИгрокон", desc: "Прим Игрокон 08.10.2021" , url: img4},
            {title: "Воркшоп «Как написать успешное резюме?»", desc: "Воркшоп «Как написать успешное резюме?» [01.03.2020]" , url: img5},
            {title: "Звёздный десант ДВФУ 2019", desc: "Звёздный десант ДВФУ 2019 [04.11-06.11.2019]" , url: img6},
       ]
        return (
            <Carousel>
                {listImgs.map(img => {
                    return (
                    <CarouselItem>
                        <img
                            className="d-block w-100"
                            src={img.url}
                         alt={img.title}/>
                        <Carousel.Caption>
                            <h3>
                                {img.title}
                            </h3>
                            <p>
                                {img.desc}
                            </p>
                        </Carousel.Caption>
                    </CarouselItem>)
                })}
            </Carousel>
        );
    }
}

export default CarouselBox;