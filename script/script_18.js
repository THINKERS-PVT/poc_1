//splitting script 13 into chatbot script 13 and TTS script 18
let y_json=[
                   {
              desc:"OPEN AI SCHOLAR",
              id:1,
              image:"https://thinkers-pvt.github.io/images/brain-4260689.jpg",
              title:"RESEARCHER 1",
              url:"jornal_1"
            },
  
                   {
              desc:"Researcher 2",
              id:2,
              image:"https://thinkers-pvt.github.io/images/concept-1868728_1920.jpg",
              title:"RESEARCHER 2",
              url:" white paper 2"
            }
           ];

const Ginel = () => {
    const getGinel =  () => {
    // const getGinel = async () => {
        // const j_json=await get_json(url_13);
        return y_json.map((ginel) => {
            const styles = {
                backgroundImage: `url(${ginel.image})`
            };
  return (React.createElement("a", { key: ginel.id, href: ginel.url, className: "ginel-card background-image", style: styles },
React.createElement("div", { className: "ginel-card-content" },
React.createElement("div", { className: "ginel-card-content-items" },
React.createElement("span", { className: "ginel-card-title" }, ginel.title),
React.createElement("span", { className: "ginel-card-desc" }, ginel.desc)))));
});
};
return (React.createElement(MenuSection, { icon: "fa-solid fa-book-open-reader", id: "ginel-section", title: "RESEARCHER" }, getGinel()));
};
