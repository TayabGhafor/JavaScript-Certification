document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (!searchInput) {
        alert('Please enter a Pokémon name or ID.');
        return;
    }

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.toLowerCase()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-id').textContent = `#${data.id}`;
            document.getElementById('weight').textContent = `Weight: ${data.weight}`;
            document.getElementById('height').textContent = `Height: ${data.height}`;
            document.getElementById('hp').textContent = data.stats[0].base_stat;
            document.getElementById('attack').textContent = data.stats[1].base_stat;
            document.getElementById('defense').textContent = data.stats[2].base_stat;
            document.getElementById('special-attack').textContent = data.stats[3].base_stat;
            document.getElementById('special-defense').textContent = data.stats[4].base_stat;
            document.getElementById('speed').textContent = data.stats[5].base_stat;

            const typesContainer = document.getElementById('types');
            typesContainer.innerHTML = ''; // Clear previous types
            data.types.forEach(type => {
                const typeElement = document.createElement('span');
                typeElement.textContent = type.type.name.toUpperCase();
                typeElement.style.marginRight = '5px';
                typesContainer.appendChild(typeElement);
            });

            const sprite = document.getElementById('sprite');
            sprite.src = data.sprites.front_default;
        })
        .catch(error => {
            alert(error.message);
        });
});
