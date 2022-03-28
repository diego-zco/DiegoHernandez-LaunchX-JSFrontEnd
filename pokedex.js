const consultarPokemon = () => {
    let inputBuscar = document.getElementById("inputBuscar").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${inputBuscar}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            document.warning("Pokemon no encontrado");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg, "poke-front-image");
            console.log(pokeImg);
            pokeImg = data.sprites.back_default;
            pokeImage(pokeImg, "poke-back-image");
            console.log(pokeImg);
        }
    });
}


const pokeImage = (url, id) => {
    const pokeImage = document.getElementById(id);
    pokeImage.src = url;
}