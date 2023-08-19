import { useState, useEffect } from 'react';
import './mapas.css';

// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { useNavigate } from 'react-router-dom';

import api from '../../../../services/api';

import { BiLoaderCircle } from 'react-icons/bi';
import { Loading } from '../../../../components/styles/styles';

{/**
 motion estava bugando ao fazer o slide, alteração feita utilizando o swiper
 @author Pablo Alteração do slide  */}

export default function Mapas() {

    const [maps, setMaps] = useState([]);
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
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
        async function loadMaps() {
            const response = await api.get('maps?language=pt-BR')
                .then((doc) => {
                    setMaps(doc.data.data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        }
        loadMaps();

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

    if (loading) {
        return (
            <Swiper
                className='containerMapas'
                style={{
                    height: 200,
                    padding: "0 20px"
                }}
                spaceBetween={10}
                slidesPerView={cards}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >

                <SwiperSlide className='card' style={{ border: '1px solid #FF5d5b' }}>
                    <Loading>
                        <BiLoaderCircle size={25} color='#FF5D5B' />
                    </Loading>
                    <h1 style={{
                        display: 'block',
                        left: 0,
                        right: 0
                    }}>
                        Carregando...
                    </h1>
                </SwiperSlide>
                <SwiperSlide className='card' style={{ border: '1px solid #FF5d5b' }}>
                    <Loading>
                        <BiLoaderCircle size={25} color='#FF5D5B' />
                    </Loading>
                    <h1 style={{
                        display: 'block',
                        left: 0,
                        right: 0
                    }}>
                        Carregando...
                    </h1>
                </SwiperSlide>
                <SwiperSlide className='card' style={{ border: '1px solid #FF5d5b' }}>
                    <Loading>
                        <BiLoaderCircle size={25} color='#FF5D5B' />
                    </Loading>
                    <h1 style={{
                        display: 'block',
                        left: 0,
                        right: 0
                    }}>
                        Carregando...
                    </h1>
                </SwiperSlide>

            </Swiper>
        )
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