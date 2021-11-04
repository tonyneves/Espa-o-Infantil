function keydownAoDigitar() {
    var tecla = event.key;
    if (tecla == "a")
        document.getElementById("inser_elem").innerHTML = '<div class="imagem_js"><img src = "../images/alphabet/A.png" alt = ""></div><div class="audio_js"><audio autoplay="autoplay" controls="controls"><source src="../audio/alphabet/A.mp3" type="audio/mp3" /></audio></div>'
    if (tecla == "b")
        document.getElementById("inser_elem").innerHTML = '<div class="imagem_js"><img src = "../images/alphabet/B.png" alt = ""></div><div class="audio_js"><audio autoplay="autoplay" controls="controls"><source src="../audio/alphabet/B.mp3" type="audio/mp3" /></audio></div>'

    if (tecla == "c")
        document.getElementById("inser_elem").innerHTML = '<div class="imagem_js"><img src = "../images/alphabet/C.png" alt = ""></div><div class="audio_js"><audio autoplay="autoplay" controls="controls"><source src="../audio/audo.mp3" type="audio/mp3" /></audio></div>'
    if (tecla == "d")
        document.getElementById("inser_elem").innerHTML = '<div class="imagem_js"><img src = "../images/alphabet/D.png" alt = ""></div><div class="audio_js"><audio autoplay="autoplay" controls="controls"><source src="../audio/audo.mp3" type="audio/mp3" /></audio></div>'
};

function keyupAoSoltar() {
    document.getElementById("remove").value = '';
};