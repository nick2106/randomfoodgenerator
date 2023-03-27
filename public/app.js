const loadRandomFood = (resultDiv) => {
    fetch("http://localhost:3000/food")
        .then(response => response.json())
        .then((result) => {
            resultDiv.classList.add('alert', 'alert-success')
            resultDiv.innerHTML = `<h2>${result.selected_food}</h2>`;
        })
}

