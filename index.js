const btnContainer = document.getElementById('btn-container');
const fetchCatagories = () => {
    const url = "https://openapi.programming-hero.com/api/videos/categories";
    fetch(url)
    .then((response) => response.json())
    .then(({data}) => {
        data.forEach(
            (card) => {
                console.log(card);
                const newBtn = document.createElement('button');
                newBtn.innerText = card.category;
                newBtn.className = 'btn btn-ghost bg-slate-700 text-white text-lg';
                btnContainer.appendChild(newBtn);

            }
        )
    })
}
fetchCatagories();