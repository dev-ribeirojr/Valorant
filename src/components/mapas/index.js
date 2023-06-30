import './mapas.css';
import api from '../../services/api';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Mapas() {

    const [maps, setMaps] = useState([]);

    const carousel = useRef();
    const [width, setWidth] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        async function loadMaps() {
            const response = await api.get('maps?language=pt-BR');
            setMaps(response.data.data);
        }
        loadMaps();

        async function loadWidth() {
            await loadMaps()
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
        }
        loadWidth();

    }, [])

    function navegar(props){
        navigate(`maps/${props}`, {uuid: props})
    }

    return (
        <motion.section
            className='containerMapas'
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.section
                ref={carousel}
                className='content'
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
            >
                {maps.map((map) => (

                    <motion.section
                        className='card'
                        key={map.uuid}
                        onClick={() => navegar(map.uuid)}>
                        <h1>
                            {map.displayName}
                        </h1>
                        <img src={map.splash} />
                    </motion.section>
                ))}
            </motion.section>
        </motion.section>
    )
}