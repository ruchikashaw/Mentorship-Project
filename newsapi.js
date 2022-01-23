let newsAPI = "https://newsdata.io/api/1/news?apikey=pub_39127f8a40b5b3a0555c8ff0816fffc7d1e0&language=en";

let app=document.querySelector(".app");

let scree = {
    main:app.querySelector(".main-screen"),
    news:app.querySelector(".news-screen")
};

let categories =["Business","Technology","Sports","Science","Entertainment","Health"];

for(let i=0;i<categories.length;i++){
    let div = document.createElement("div");
    div.innerText = categories[i];
    div.className="categories";
    div.addEventListener("click",function(){
        scree.main.querySelector(".categories .active").classList.remove("active");
        div.classList.add("active");
        fetchCategoryNews(categories[i]);
    });

    if(i == 0){
        div.classList.add("active");
        fetchCategoryNews(categories[i]);
    }

    scree.main.querySelector(".categories").appendChild(div);
}


async function fetchCategoryNews(catagory){
    scree.main.querySelector(".news-list").innerHTML="";
    try{
        const res = await fetch(newsAPI + "&category=" + catagory.toLowerCase());
        const data = await res.json();
        console.log(data);
        let news = data.results;
        console.log(news);
        for(let i=0;i<4;i++){
            let div=document.createElement("div");
            div.classList.add("item");
            div.addEventListener("click",function(){
               
               
            });
            div.innerHTML=
               `<div class = "details">
                <h2>${news[i].title}</h2>
                <p>${news[i].description}</p>
              </div>`
            ;
            scree.main.querySelector(".news-list").appendChild(div);
        }
    }catch(msg){}
}