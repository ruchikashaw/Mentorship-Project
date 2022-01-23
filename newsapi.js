let newsAPI = "http://api.mediastack.com/v1/news?access_key=0ac9d0fd9011320844239fe5c66e09b3&countries=in";

let app=document.querySelector(".app");
let screen = {
    main:app.querySelector(".main-screen"),
    news:app.querySelector(".news-screen")
};

let categories =["Business","General","Sports","Science","Entertainment","Health"];

for(let i=0;i<categories.length;i++){
    let div = document.createElement("div");
    div.innerText = categories[i];
    div.addEventListener("click",function(){
        screen.main.querySelector(".categories .active").classList.remove("active");
        div.classList.add("active");
        fetchCategoryNews(categories[i]);
    });

    if(i == 0){
        div.classList.add("active");
        fetchCategoryNews(categories[i]);
    }

    screen.main.querySelector(".categories").appendChild(div);
}


async function fetchCategoryNews(catagory){
    screen.main.querySelector(".news-list").innerHTML="";
    try{
        const res = await fetch(newsAPI + "&categories=" + catagory.toLowerCase());
        const data = await res.json();
        let news = data.data;
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
            screen.main.querySelector(".news-list").appendChild(div);
        }
    }catch(msg){}
}