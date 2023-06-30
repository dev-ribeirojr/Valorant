import { useEffect, useState } from "react"
import api from "../../services/api";
import {
    ContentCall,
    Call,
    Name,
    RegiaoName,
    Local

} from './styles'

export default function CallOuts({ uuid }) {

    const [calls, setCalls] = useState([]);

    useEffect(() => {
        async function loadCalls() {
            const response = await api.get(`maps/${uuid}`);
            setCalls(response?.data.data.callouts);
        }
        loadCalls();
    }, [])
    return (
        <ContentCall>
            {calls.map((call) => (
                <Call key={`${call.regionName}${call.superRegionName}${call.location.x}`}>
                    <Name>
                        {call.regionName}
                    </Name>
                    <RegiaoName>
                        Super Região:  <span>{call.superRegionName}</span>
                    </RegiaoName>
                    <Local>
                        <span>X: {call.location.x} </span>
                        <span>Y: {call.location.y} </span>
                    </Local>
                </Call>
            ))}
        </ContentCall>
    )

}