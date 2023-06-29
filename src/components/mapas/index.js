import './mapas.css';
import api from '../../services/api';
import { motion } from 'framer-motion';

import { useState, useEffect, useRef } from 'react';

export default function Mapas() {

    const [maps, setMaps] = useState([]);

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        async function loadMaps() {
            const response = await api.get('maps');
            setMaps(response.data.data);
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
            console.log(response)
        }
        loadMaps()
    }, [])

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

                    <motion.section className='card' key={map.uuid}>
                        <img src={map.splash} />
                        <h1>
                            {map.displayName}
                        </h1>

                    </motion.section>
                ))}
            </motion.section>
        </motion.section>
    )
}