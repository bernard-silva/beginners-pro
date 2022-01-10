let vetorMusicas = []

async function requisicao(valorBusca) {
    // console.log(valorBusca)
    return await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${valorBusca}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "7f308c5df7mshc829ca4a43fbc68p1e566djsn0f051ddc1392"
        }
    }).then(response => {
        try {
            if (!response.ok) {
                // console.log('Requisição: Erro HTTP!');
                throw new Error(`Erro HTTP! status: ${response.status}`);
            } else {
                const res = response.json()
                console.log(res);
                return res;
                // return response.json();
            }
        } catch (error) {
            // alert("Ocorreu um erro inesperado! Verifique o log do sistema!")
            // console.log("Ocorreu um erro inesperado! Verifique o log do sistema!")
            console.log(error)
        }
    })
}

function carregaArray(result) {

    let objeto
    
    Object.keys(result.data).forEach(function (i) {
        objeto = new CriaObjeto(
            result.data[i].title_short, 
            result.data[i].artist.name, 
            result.data[i].duration, 
            result.data[i].rank, 
            result.data[i].album.title, 
            result.data[i].artist.picture_small, 
            result.data[i].album.cover_small, 
            result.data[i].preview
        )
        vetorMusicas.push(objeto);
    })
}

function CriaObjeto(musica, artista, duracao, ranking, album, ftArtista, ftAlbum, play) {
    this.musica = musica
    this.artista = artista
    this.duracao = duracao
    this.ranking = ranking
    this.album = album
    this.ftArtista = ftArtista
    this.ftAlbum = ftAlbum
    this.play = play
}

function varrerVetor(vetorMusicas) {

    let el_tbody = document.querySelector('tbody');
    el_tbody.innerHTML = ''
    
    document.querySelector('#modal').style.visibility = 'visible';

    vetorMusicas.forEach(function (vetorMusica, i) {
        el_tbody.innerHTML += `<tr>
            <td class="rowText">${vetorMusica.musica}</td>
            <td class="rowText">${vetorMusica.artista}</td>
            <td class="rowText">${fancyTimeFormat(vetorMusica.duracao)}</td>
            <td class="rowText">${vetorMusica.ranking}</td>
            <td class="rowText">${vetorMusica.album}</td>
            <td> <img src=${vetorMusica.ftArtista} width="100" height="100"</td>
            <td> <img src=${vetorMusica.ftAlbum} width="100" height="100"</td>
            <td id="iconPlay"> 
                <audio src=${vetorMusica.play}></audio> 
                <i class="far fa-play-circle" onclick="playAudio(this)"></i>
            </td>
        </tr> `
    })
}

function playAudio(element) {
    let [ audio, i ] = element.parentElement.children

    console.log("Element: " + element)
    console.log("Collection: " + element.parentElement.children)
    console.log("Audio: " + audio)
    console.log("Ícone: " + i)

    if (isPlaying(audio) === true) {
        changeElement(i, 'fa-pause-circle', 'fa-play-circle', '#000000')
        audio.pause()
    } else {
        stopedAudio()
        iconStop()
        changeElement(i, 'fa-play-circle', 'fa-pause-circle', '#59ff6b')
        audio.play()
    }
}

function changeElement(element, removeClass, addClass, color) {
    element.style.color = color;
    element.classList.remove(removeClass)
    element.classList.add(addClass)
}

function isPlaying(element) {
    return element.currentTime > 0 && !element.paused && !element.ended && element.readyState > 2;
} 

function stopedAudio() {
    let audioList = document.querySelectorAll('audio');

    audioList.forEach(function(audio) {
        if (isPlaying(audio) === true) {
            changeElement(audio, 'fa-pause-circle', 'fa-play-circle', '#000000')
            audio.pause();
            audio.currentTime = 0;
        }
    })    
}

function iconStop() {
    let iList = document.querySelectorAll('i');

    iList.forEach(function(i) {
        changeElement(i, 'fa-pause-circle', 'fa-play-circle', '#000000')
    })    
}

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = Math.floor(duration / 3600);
    var mins = Math.floor((duration % 3600) / 60);
    var secs = Math.floor(duration % 60);
    
    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function limpaTabela() {
    vetorMusicas = [];
    let el_tbody = document.querySelector('tbody');
    el_tbody.innerHTML = ''
    document.querySelector('#modal').style.visibility = 'hidden';
}

function limpaCampo() {
    dados.busca.value = '';
    dados.busca.focus();
}

document.getElementById('btnBuscar').addEventListener('click', function (event) {
    event.preventDefault()
    limpaTabela();

    var valorBusca = document.getElementById('busca').value;

    const pesquisa = requisicao(valorBusca)

    pesquisa.then(result => {
        try {
            if (result.error) {
                alert('Por favor, informe uma música ou artista.', 'Info:');
                throw new Error(result.error.message)
            }
            if (!result.data.length > 0) {
                alert('Nenhuma musica/ou artista encontrado(a).', 'Info:');
                throw new Error('Nenhuma musica/ou artista encontrado(a).')
            }
            carregaArray(result)
            varrerVetor(vetorMusicas)
        } catch (error) {
            console.log(error)
        }
    })
    limpaCampo();
})

// -------------------------- outros teste ---------------

// function topDez(res) {
//     document.querySelector('p').innerHTML = '';
//     console.log('dentro topDez')
//     document.querySelector('p').innerHTML = res.data[0].title;
// }

