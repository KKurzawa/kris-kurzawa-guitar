let analyser;
let request;

export const visualizer = (audioElement, canvas, play) => {
    if (!analyser) {
        const AudioCotext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioCotext();
        let source = audioCtx.createMediaElementSource(audioElement);
        analyser = audioCtx.createAnalyser();
        source.connect(analyser)
        source.connect(audioCtx.destination);
    }

    analyser.fftSize = 64;
    let bufferLength = analyser.frequencyBinCount;
    let datArray = new Uint8Array(bufferLength);
    const ctx = canvas.getContext("2d");
    const WIDTH = canvas.width = canvas.clientWidth;
    const HEIGHT = canvas.height = canvas.clientHeight;

    function draw() {
        request = requestAnimationFrame(draw);
        analyser.getByteTimeDomainData(datArray);
        ctx.beginPath();
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (let i = 0; i < bufferLength; i++) {
            let v = datArray[i] / 10;
            ctx.arc(WIDTH / 2, HEIGHT / 2, Math.abs(100 + v), 0, 2 * Math.PI);
            ctx.shadowColor = 'whitesmoke';
            ctx.shadowBlur = 3;
            ctx.strokeStyle = '#a57522';
            ctx.stroke();
        }
    }

    if (play) {
        cancelAnimationFrame(request);
    } else { draw() }
}