function fillBlank(id, word) {
    let element = document.getElementById(id);
    if (element.textContent.includes("...")) {
        element.textContent = word;
    } else {
        element.textContent += " " + word;
    }
    // Fjern eventuelle gjenværende punktum (...) etter å ha valgt et ord
    let story = document.getElementById('story');
    story.innerHTML = story.innerHTML.replace(/\.{3}/g, '');
}






