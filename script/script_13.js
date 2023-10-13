
const url_13 = "";
let j_json=[
              {
                desc: "Black rock Corpoation",
                id: 1,
                image: "https://www.blackrock.com/blk-corp-assets/cache-1542297736000/images/media-bin/web/global/wordmark/blackrock-logo-nav.svg",
                title: "BLACK ROCK",
            url:"https://www.blackrock.com/corporate"
            },
   {
                desc: "Black rock Corpoation",
                id: 2,
                image: "https://www.blackrock.com/blk-corp-assets/cache-1542297736000/images/media-bin/web/global/wordmark/blackrock-logo-nav.svg",
                title: "BLACK ROCK",
            url:"https://www.blackrock.com/corporate"
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
