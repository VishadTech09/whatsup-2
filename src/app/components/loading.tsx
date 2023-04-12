import styled from 'styled-components';
import { Circle } from 'better-react-spinkit';

const Loading = () => {
    return (
        <center style={{display:"grid", placeItems:"center", height:"100vh"}}>
            <div>
            <img src='https://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png' height={200}
                style={{ marginBottom: 10 }}
            />
            <Circle color="#3CBC28" size={60}/>
            </div>
        </center>
    )
}

export default Loading;
