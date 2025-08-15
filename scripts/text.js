document.addEventListener("DOMContentLoaded", function () {
    const texts = [ "Student.", "Researcher.", "AI Infrastructure Engineer", "Software Developer.", "Machine Learning Engineer."];;
    let index = 0;
    let textElement = document.getElementById("cyclic-text");

    function updateText(text) {
        textElement.innerHTML = text + '<span class="caret">|</span>';
    }

    function typeText(text, callback) {
        let i = 0;
        let interval = setInterval(() => {
            updateText(text.slice(0, i));
            i++;
            if (i > text.length) {
                clearInterval(interval);
                setTimeout(callback, 1000); // Pause before deleting
            }
        }, 100);
    }

    function deleteText(callback) {
        let text = textElement.textContent;
        let i = text.length;
        let interval = setInterval(() => {
            updateText(text.slice(0, i));
            i--;
            if (i < 0) {
                clearInterval(interval);
                setTimeout(callback, 500); // Short pause before typing new text
            }
        }, 100);
    }

    function cycleText() {
        deleteText(() => {
            index = (index + 1) % texts.length;
            typeText(texts[index], cycleText);
        });
    }

    // Start the cycle
    typeText(texts[index], cycleText);
});