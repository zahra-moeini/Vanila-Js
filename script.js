const  container=document.querySelector('.container');

const fetchData=()=>{
    fetch('https://example-data.draftbit.com/restaurants')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        container.innerHTML=data.map(
        (restaurant)=>
           `<div class="card-restaurant">
                <div class="card-restaurant-heading">
                    <h2>${restaurant.name}</h2>
                </div>
                <img src=${restaurant.image} alt="#" />

                <div class="card-restaurant-details">

                    <div class="country">
                    <p><span><i class="fas fa-flag"></i></span> Country:${restaurant.country}</p>
                    </div>
                    
                    <div class="phone">
                    <p><span><i class="fas fa-phone"></i></span> Phone:${restaurant.phone}</p>
                    </div>

                    <div class="adress">
                    <p><span><i class="fas fa-home"></i></span> Address:${restaurant.address}</p>
                    </div>

                    <div class="website">
                        <a href=${restaurant.website} target=_blank>Visit website</a>
                    </div>
                    
                </div>
           
           </div>` 

    );
    
    }).catch(err=>console.log(err))
};

fetchData();