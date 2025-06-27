//Pokemon image fetcher

async function fetchData() {

    try {
        const pokeName = document.getElementById("pokeName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokeImage = data.sprites.front_default; //it will fetch the image url of pokemon
        const imgElement = document.getElementById("pokeImage");

        imgElement.src = pokeImage;
        imgElement.style.display = "block";
    } 
    catch (error) {
        console.log(error);
    }
    
}

//images of the pokemon are in the Object's sprites: front_default: "url"
//so we need to fetch the front_default property