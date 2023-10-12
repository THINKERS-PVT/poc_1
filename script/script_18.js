//splitting script 13 into chatbot script 13 and TTS script 18
let y_json=[
                   {
              desc:"OPEN AI SCHOLAR",
              id:1,
              image:"",
              title:"RESEARCHER 1",
              url:"https://siddh-kivtechs.github.io/tts_base_1/"
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
