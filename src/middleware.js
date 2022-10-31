// const middleware = {
    //     send(trigger, value={}) {
    //         sendJsonMessage({
    //             operation: trigger,
    //             ...value
    //         });
    //
    //     },
    //     message: {
    //         token: React.useMemo(() => {
    //             if (lastJsonMessage !== null && lastJsonMessage.operation === "token") {
    //                 setToken(lastJsonMessage.token);
    //                 setShow(false);
    //             }
    //         }, [lastJsonMessage]),
    //         addLocation: React.useMemo(() => {
    //             if (lastJsonMessage !== null && lastJsonMessage.operation === "addLocation") {
    //                 setGet(true);
    //                 // setLocation([...location, {...lastJsonMessage.data[lastJsonMessage.data.length-1]}]);
    //                 // setLocation([{location: object.data[object.data.length-1].name, id: object.data[object.data.length-1].id}]);
    //                 // setDisabled(false);
    //             }
    //         }, [lastJsonMessage]),
    //         getLocations: React.useMemo(() => {
    //             if (lastJsonMessage !== null && lastJsonMessage.operation === "getLocations") {
    //                 console.log(lastJsonMessage)
    //                 // setLocation([...location, {...lastJsonMessage.data[lastJsonMessage.data.length-1]}]);
    //                 // // setLocation([{location: object.data[object.data.length-1].name, id: object.data[object.data.length-1].id}]);
    //                 // setDisabled(false);
    //                 setGet(false);
    //             }
    //         }, [lastJsonMessage, get]),
    //         addData: React.useMemo(() => {
    //             if (lastJsonMessage !== null && lastJsonMessage.operation === "addData") {
    //                 setData([...data, lastJsonMessage.data[lastJsonMessage.data.length-1]]);
    //                 setDisabled(false);
    //             }
    //         }, [lastJsonMessage]),
    //     }
    // }