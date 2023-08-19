import { useState, useEffect, useRef } from 'react';
import './mapas.css';

import api from '../../services/api';

import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
{/**
 motion estava bugando ao fazer o slide, alteração feita utilizando o swiper
 @author Pablo Alteração do slide  */}

export default function Mapas() {

    const [maps, setMaps] = useState([]);
    const [cards, setCards] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        async function loadMaps() {
            const response = await api.get('maps?language=pt-BR');
            setMaps(response.data.data);
        }
        loadMaps();
        function cardsNum() {
            if (window.innerWidth > 1024) {
                setCards(3)
            } else if (window.innerWidth > 768) {
                setCards(2)
            } else {
                setCards(1)
            }
        }
        cardsNum()
    }, [])

    function navegar(props) {
        navigate(`maps/${props}`, { uuid: props })
    }

    document.body.onresize = () => {
        if (window.innerWidth > 1024) {
            setCards(3)
        } else if (window.innerWidth > 768) {
            setCards(2)
        } else {
            setCards(1)
        }
    }

    return (
        <Swiper
            className='containerMapas'
            slidesPerView={cards}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
        >
            {maps.map((map) => (
                <SwiperSlide
                    className='card'
                    key={map.uuid}
                    onClick={() => navegar(map.uuid)}>
                    <h1>
                        {map.displayName}
                    </h1>
                    <img src={map.splash} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}