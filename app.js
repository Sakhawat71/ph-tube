// get button data form api
const getBtnData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const allData = data.data;

    showCategory(allData);
}

// show button 
const showCategory = (allData) => {

    const categorySection = document.getElementById("show-category");
    allData.forEach(optionBtn => {

        const showCategoryBtn = document.createElement("button");
        showCategoryBtn.classList = "btn btn-active";

        showCategoryBtn.innerHTML = `
            ${optionBtn.category}
        `;
        showCategoryBtn.addEventListener("click", () => {
            getVideos(optionBtn.category_id);
        })
        categorySection.appendChild(showCategoryBtn);
    });
}

// click button 
// const showVideosByCategory = (id) => {
//     getVideos(id);
// }

// get data for shwo videos all category
const getVideos = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(id);
    displayVideos(data);
}


const displayVideos = (data) => {

    const videoContainer = document.getElementById("videos-container");
    const errorMasege = document.getElementById("error")
    videoContainer.textContent = '';
    errorMasege.textContent = '';

    console.log(data)
    if(data.status === false){
        errorMasege.innerHTML = `
        <div class="text-center mt-10">
                <img class="mx-auto" src="img/Icon.png" alt="">
                <p class="font-bold text-2xl mt-5">Oops!! Sorry, There is no content here</p>
            </div>
        `;
    }

    data.data.forEach((video) => {
        const videoCart = document.createElement("div");

        videoCart.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl ">
                <figure class="relative h-48"><img class="max-h-48 w-full h-full" src="${video.thumbnail}" />
                <p class="absolute bg-black text-white  bottom-0 right-0 rounded-md ">${video.others?.posted_date ? video.others?.posted_date: ""}</p>
                </figure>
                
                <div class="card-body flex flex-row gap-3 h-32">
                    <div class="w-10 rounded-full">
                        <img class="max-w-10 max-h-10 rounded-full" src="${video.authors[0]?.profile_picture}" />
                        
                    </div>
                    <div>
                        <h2 class="card-title font-bold">${video.title}</h2>
                        <p>${video.authors[0].profile_name} ${video.authors[0]?.verified}
                        <i class="fa-solid fa-certificate" style="color: #3008bf;"></i>
                        </p>
                        
                        <p>${video.others?.views} views</p>
                    </div>
                </div>
        </div>
        `;
        videoContainer.appendChild(videoCart);


        

    })
}




getBtnData()
getVideos('1000')