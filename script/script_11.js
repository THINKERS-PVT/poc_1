//  projects script
let n_json=[

                 {
                desc: "We are THINKERS PRIVATE LIMITED,Bridge the gap between researchers and investors by providing researchers with the resources they need to develop their business acumen and write a successful grant proposal, and by connecting researchers with investors who are interested in funding innovative research ",
                id: 1,
                image: "https://thinkers-pvt.github.io/images-prj/1%200b5QvAKZ9inGUnOHposD2w.jpg",
                title: "THINKERS PRIVATE LIMITED",
                url: "https://thinkerrs.com/"
            }
            ];





const Projects = () => {
    const getProjects=()=>{
        return n_json.map((project) => {
           const styles = {
                backgroundImage: `url(${project.image})`
            };

  return (React.createElement("a", { key: project.id, href: project.url, className: "project-card background-image", style: styles },
React.createElement("div", { className: "project-card-content" },
React.createElement("div", { className: "project-card-content-items" },
React.createElement("span", { className: "project-card-title" }, project.title),
React.createElement("span", { className: "project-card-desc" }, project.desc)))));
});
};

    return (React.createElement(MenuSection, { icon: "fa-solid fa-hand-holding-hand", id: "projects-section", scrollable: true, title: " THINKERS " }, getProjects()));
};
