let itemArray = [
    {
        firstName : "Віталій",
        lastName : "Шатківський",
        age : 143 ,
        subject : "CS",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
        sale : 1593
    },
    {
        firstName : "Наталія",
        lastName : "Венцель",
        age : 18 ,
        subject : "Адміністрація",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
        sale : 4295
    },
    {
        firstName : "Наталія",
        lastName : "Кучер",
        age : 18 ,
        subject : "Фізика",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
        sale : 3765
    },

    {
        firstName : "Ірина",
        lastName : "Боровська-Карандюк",
        age : 18 ,
        subject : "Укр мова",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
        sale : 3356
    },
    {
        firstName : "Лариса",
        lastName : "Забелло",
        age : 18 ,
        subject : "Англ мова",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
        sale : 0
    },
    {
        firstName : "Наталія",
        lastName : "Зинюк",
        age : 18 ,
        subject : "Хімія і Біологія",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
        sale : 2653
    },
    {
        firstName : "Анжела",
        lastName : "Лознюк",
        age : 18 ,
        subject : "Хімія і Біологія",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
        sale : 3746
    },
    {
        firstName : "Наталія",
        lastName : "Зинюк",
        age : 18 ,
        subject : "Хімія і Біологія",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
        url : "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
        sale : 3473
    },
    {
        firstName : "Василь",
        lastName : "Бабій",
        age : 65 ,
        subject : "Хімія і Біологія",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
        sale : 1473
    },
    {
        firstName : "Василь",
        lastName : "Бабій",
        age : 61 ,
        subject : "Хімія і Біологія",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
        sale : 1473
    },
    {
        firstName : "Вікторія",
        lastName : "Нелипович",
        age : 18 ,
        subject : "Хімія і Біологія",
        photo : "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
        url : "https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
        sale : 1473
    },

]

let itemsDiv = document.getElementById("items")

itemArray.forEach((item, index) => {
    itemsDiv.innerHTML += 
        `
        <div class="item">
            <h2>Вчитель № ${index + 1} з ${itemArray.length}</h2>
            <p>${item.lastName} ${item.firstName}</p>
            <p>Вік: ${item.age}</p>
            <p><img src="${item.photo}" class="item-image"> </p>
            <p><a href="${item.url}" target="_blank">Профіль</a></p>
            <p>Ціна : ${item.sale} грн</p>
        </div>
        `;
});