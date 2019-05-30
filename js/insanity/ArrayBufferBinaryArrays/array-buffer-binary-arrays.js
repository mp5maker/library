(function() {
    "use strict";

    let buffer = new ArrayBuffer(16);
    console.log("TCL: buffer", buffer)
    console.log("TCL: buffer byte length", buffer.byteLength)

    let view = new Uint32Array(buffer);
    console.log("TCL: Uint32Array Bytes per element", Uint32Array.BYTES_PER_ELEMENT)
    console.log("TCL: view", view)
    console.log("TCL: view length", view.length)
    console.log("TCL: view byte length", view.byteLength)

    view[0] = 123456;

    for (let num of view) {
        console.log(num);
    }

    buffer = new Uint8Array([255, 255, 255, 255]).buffer;
    let dataView = new DataView(buffer);
    console.log(dataView.getUint8(0)); // 255
    console.log(dataView.getUint16(0)); // 65535 (biggest 16-bit unsigned int)
    console.log(dataView.getUint32(0)); // 4294967295 (biggest 32-bit unsigned int)
    console.log(dataView.setUint32(0, 0)); // set 4-byte number to zero
})();