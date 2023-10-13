
const url_13 = "";
let j_json=[
              {
                desc: "Black rock Corpoation is a Venture capital company",
                id: 1,
                image: "https://thinkers-pvt.github.io/images-prj//BlackRock_wordmark.svg",
                title: "BLACK ROCK",
            url:"https://www.blackrock.com/corporate"
            },
   {
                desc: "Sequoia Capital is a Venture capital company",
                id: 2,
                image: "https://thinkers-pvt.github.io/images-prj/Sequoia_Capital_logo.svg",
                title: "Sequoia Capital",
            url:"https://www.sequoiacap.com/"
            },
     {
                desc: "Pradhan Mantri Mudra Yojana to boost small companies/SME",
                id: 3,
                image: "https://thinkers-pvt.github.io/images-prj/MudraYojna.eps",
                title: "Pradhan Mantri Mudra Yojana(PMMY)",
            url:"https://www.mudra.org.in/"
            }

 
           
           ];
const Restaurants = () => {
    const getRestaurants =  () => {
    // const getRestaurants = async () => {
        // const j_json=await get_json(url_13);
        return j_json.map((restaurant) => {
            const styles = {
                backgroundImage: `url(${restaurant.image})`
            };
  return (React.createElement("a", { key: restaurant.id, href: restaurant.url, className: "restaurant-card background-image", style: styles },
React.createElement("div", { className: "restaurant-card-content" },
React.createElement("div", { className: "restaurant-card-content-items" },
React.createElement("span", { className: "restaurant-card-title" }, restaurant.title),
React.createElement("span", { className: "restaurant-card-desc" }, restaurant.desc)))));
});
};
return (React.createElement(MenuSection, { icon: "fa-dark fa-chart-mixed-up-circle-currency", id: "restaurants-section", title: "INVESTOR" }, getRestaurants()));
};
