import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import connect  from './middleware.js';
import { Main } from './components/Main/Main';
import { Context } from './context';
import { ModalAuth } from './components/UI/ModalAuth.jsx';

import './App.css';

function App() {
    const [token, setToken] = React.useState("");
    const [name, setName] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);
    const [show, setShow] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [location, setLocation] = React.useState([]);
    const [socketUrl, setSocketUrl] = React.useState('ws://185.246.65.199:8888/');

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl);
    const providerData = React.useMemo(() => ({middleware, location, data, token}), [middleware, location, data, token]);
    
    function middleware(value={}) {
        sendJsonMessage({
            ...value
        });
    };

    React.useEffect(() => {
        if (lastJsonMessage !== null && lastJsonMessage.operation === "token") {
            setToken(lastJsonMessage.token);
            setShow(false);
        }

        if (lastJsonMessage !== null && lastJsonMessage.operation === "addLocation") {
            middleware({operation: "getLocations", token: token});
        }

        if (lastJsonMessage !== null && lastJsonMessage.operation === "locationsList") {
            setLocation([...location, {...lastJsonMessage.data[lastJsonMessage.data.length-1]}]);
            setDisabled(false);
        }

        // if (lastJsonMessage !== null && lastJsonMessage.operation === "addData") {
        //     setData([...data, lastJsonMessage.data[lastJsonMessage.data.length-1]]);
        //     setDisabled(false);
        // }
        
        // if (lastJsonMessage !== null && lastJsonMessage.operation === "addLocation") {
        //     setToken(lastJsonMessage.token);
        //     setShow(false);
        // }

    }, [lastJsonMessage]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
    <Context.Provider value={providerData}>
        <div className="App">
      {
        !token
          ?
          <ModalAuth
            show={show}
            setShow={setShow}
            authHandler={() => middleware({operation: "getToken"})}
          />
          : <Main disabled={disabled} />
      }
      </div>
    </Context.Provider>
  );
}

export default App;








 