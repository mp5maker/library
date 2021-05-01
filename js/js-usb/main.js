import "./style.css";

(function () {
  const button = document.querySelector(".usb");

  const onClick = (_event) => {
    navigator.usb.getDevices().then((devices) => {
      devices.forEach((device) => {
        console.log(device.productName);
        console.log(device.manufacturerName);
      });
    });
  };

  button.addEventListener("click", onClick);
})();
