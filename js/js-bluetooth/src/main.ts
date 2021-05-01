import "./style.css";

(function () {
  const button = document.querySelector(".bluetooth-active");
  const options = {
    // filters: [
    //   {
    //     services: [0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']
    //     services: ["battery_service"],
    //   },
    // ],
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  };

  const onButtonClick = async (_event: any) => {
    if (window?.navigator) {
      try {
        // @ts-ignore
        const device = await window.navigator.bluetooth.requestDevice(options);

        // Device Information
        console.log(device);
        console.log(device.name);
        await device.gatt.disconnect();

        // Disconnected
        const onDisconnected = (event: any) => {
          const _device = event.target;
          console.log(`${_device.name} is disconnected`);
        };
        device.addEventListener("gattserverdisconnected", onDisconnected);

        // const server = await device.get.connect();
        // console.log(server);
      } catch (error) {
        console.log(error);
      }
    }
  };

  button?.addEventListener("click", onButtonClick);
})();
