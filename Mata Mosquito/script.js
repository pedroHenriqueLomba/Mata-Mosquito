var body_size = get_body_size()
var health = 3
var game_time = 20

function get_body_size() {
    var body_width = window.innerWidth
    var body_height = window.innerHeight
    return body_size = [body_width, body_height]
}

// Função que gerará o mosquito
function appear_mosquito(){
    if (document.getElementById("mosquito")) {
        remove_mosquito()
        health--
        change_heart()
        if (health < 0) {
            window.location.href = "game_over.html"
        }
    }
    var mosquito = document.createElement("img")
    mosquito.src = "img/mosquito.png"
    mosquito.width = 100 + Math.floor(Math.random() * 100)
    mosquito.className = get_mosquito_side()
    mosquito.id = "mosquito"
    mosquito.style.position = "absolute"
    mosquito.style.left = Math.floor(Math.random() * (body_size[0] - mosquito.width)) + "px"
    mosquito.style.top = Math.floor(Math.random() * (body_size[1] - (mosquito.width + 20))) + "px"
    mosquito.onclick = remove_mosquito
    document.body.appendChild(mosquito)
}

// Função que define o lado que o mosquito será gerado
function get_mosquito_side() {
    var side = Math.random()
    if (side<0.5) {
        return "side_A"
    } else {
        return "side_B"
    }
}

// Função que o mosquito desaparecerá automaticamente
function remove_mosquito(){
    document.getElementById("mosquito").remove()
}

// Função que altera os corações de vida
function change_heart() {
    if (health == 2) {
        document.getElementById("heart_1").src = "img/coracao_vazio.png"
    } else if (health == 1) {
        document.getElementById("heart_1").src = "img/coracao_vazio.png"
        document.getElementById("heart_2").src = "img/coracao_vazio.png"
    } else if (health == 0) {
        document.getElementById("heart_1").src = "img/coracao_vazio.png"
        document.getElementById("heart_2").src = "img/coracao_vazio.png"
        document.getElementById("heart_3").src = "img/coracao_vazio.png"
    }
}

function clock(){
    game_time--
    document.getElementById("clock").innerHTML = game_time
    if (game_time == 0) {
        window.location.href = "victory.html" 
    }
}