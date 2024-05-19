let itemArray = [
    {
        "Name": "Мотокоса",
        "sale1": 5758,
        "sale2": 4758,
        "photo": "img/мотокоса1.jpg",
        "bonusSale": 5258
    },
    {
        "Name": "Мотокоса",
        "sale1": 5137,
        "sale2": 4137,
        "photo": "img/мотокоса2.jpg",
        "bonusSale": 4637
    },
    {
        "Name": "Мотокоса",
        "sale1": 5985,
        "sale2": 4985,
        "photo": "img/мотокоса3.jpg",
        "bonusSale": 5485
    },
    {
        "Name": "Мотокоса",
        "sale1": 5342,
        "sale2": 4342,
        "photo": "img/мотокоса4.jpg",
        "bonusSale": 4842
    },
    {
        "Name": "Мотокоса",
        "sale1": 5619,
        "sale2": 4619,
        "photo": "img/мотокоса5.jpg",
        "bonusSale": 5119
    },
    {
        "Name": "Мотокоса",
        "sale1": 5876,
        "sale2": 4876,
        "photo": "img/мотокоса6.jpg",
        "bonusSale": 5376
    },
    {
        "Name": "Мотокоса",
        "sale1": 5268,
        "sale2": 4268,
        "photo": "img/мотокоса7.png",
        "bonusSale": 4768
    },
    {
        "Name": "Мотокоса",
        "sale1": 5543,
        "sale2": 4543,
        "photo": "img/мотокоса5.png",
        "bonusSale": 5043
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7342,
        "sale2": 6342,
        "photo": "img/Газонокосарка1.jpg",
        "bonusSale": 6842
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7897,
        "sale2": 6897,
        "photo": "img/Газонокосарка2.jpg",
        "bonusSale": 7397
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7523,
        "sale2": 6523,
        "photo": "img/Газонокосарка3.jpg",
        "bonusSale": 7023
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7214,
        "sale2": 6214,
        "photo": "img/Газонокосарка4.jpg",
        "bonusSale": 6714
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7985,
        "sale2": 6985,
        "photo": "img/Газонокосарка5.webp",
        "bonusSale": 7485
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7701,
        "sale2": 6701,
        "photo": "img/Газонокосарка6.jpg",
        "bonusSale": 7201
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7438,
        "sale2": 6438,
        "photo": "img/Газонокосарка7.jpg",
        "bonusSale": 6938
    },
    {
        "Name": "Газонокосарка",
        "sale1": 7897,
        "sale2": 6897,
        "photo": "img/Газонокосарка2.jpg",
        "bonusSale": 7397
    },

]

let itemsDiv = document.getElementById("items")

itemArray.forEach((item, index) => {
    itemsDiv.innerHTML += 
        `
        <div class="item">
                <p>${item.Name}</p>
                <div>
                    <img class="item-image" src="${item.photo}">
                </div>
                <div class="parts-pay">
                    <div><img src="img/mololapka.png"></div>
                    <div><img src="img/pb.jfif"></div>
                </div>
                <div class="price">
                    <div>
                        <span>${item.sale1}</span><sup>грн</sup>
                        
                        <span>${item.sale2}</span><sup>грн</sup>
                    </div>
                </div>

                <div class="bonus">
                    <div>Ціна за купоном</div>
                    <div >
                        <span class="bonus-div">${item.bonusSale} </span>
                        <sup>грн</sup>
                    </div>
                    
                    
                </div>


            </div>
        `;
});