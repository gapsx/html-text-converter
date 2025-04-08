document.getElementById('convertButton').addEventListener('click', function () {
    const textInput = document.getElementById('textInput').value;
    const colorInput = document.getElementById('colorInput').value;
    const imageInput = document.getElementById('imageInput').value;

    let htmlOutput = `<p style="color: ${colorInput};">${textInput}</p>`;

    if (imageInput) {
        htmlOutput += `<img src="${imageInput}" alt="Inserted Image" class="img-fluid mt-3">`;
    }

    document.getElementById('htmlOutput').innerText = htmlOutput;
});