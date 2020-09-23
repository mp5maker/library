(function() {
    async function init() {
        const synth = window.speechSynthesis
        const textForm = document.querySelector('form')
        const textInput = document.querySelector('#text-input');
        const voiceSelect = document.querySelector("#voice-select");
        const rate = document.querySelector('#rate');
        const rateValue = document.querySelector('#rate-value')
        const pitch = document.querySelector('#pitch');
        const pitchValue = document.querySelector('#pitch-value');

        let voices = []
        const getVoices = () => {
            voices = synth.getVoices()

            voices.forEach((voice) => {
                const option = document.createElement('option')
                option.textContent = `${voice.name} (${voice.lang})`
                option.setAttribute('data-lang', voice.lang)
                option.setAttribute('data-name', voice.name)
                voiceSelect.appendChild(option)
            })
        };

        getVoices()
        if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = getVoices

        const speak = () => {
            if (synth.speaking) return console.error("Already Speaking...");
            if (textInput.value !== '') {
                const speakText = new SpeechSynthesisUtterance(textInput.value)

                speakText.onend = (event) => console.log('Done Speaking...')
                speakText.onerror = (event) => console.error('Something went wrong')

                const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')
                voices.forEach(voice => {
                    if (voice.name == selectedVoice) speakText.voice = voice
                })

                speakText.rate = rate.value
                speakText.pitch = pitch.value
                synth.speak(speakText)
            }
        }

        textForm.addEventListener('submit', (event) => {
            event.preventDefault()
            speak()
            textInput.blur()
        })

        rate.addEventListener('change', (event) => rateValue.textContent = rate.value)
        pitch.addEventListener('change', (event) => pitchValue.textContent = pitch.value)
        voiceSelect.addEventListener('change', (event) => speak())
    }

    init()
})()