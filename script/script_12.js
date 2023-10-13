
const url_12 = "";
let k_json=[ 
             
            {
                icon: "fa-solid fa-person-dress",
                id: 1,
                image: "https://thinkers-pvt.github.io/images/generated_00.png",
                label: "PERSON 1",
                name: "PERSON 1",
                url:""
            },
    {
                icon: "fa-solid fa-user",
                id: 1,
                image: "https://thinkers-pvt.github.io/images/generated_02.png",
                label: "PERSON 2",
                name: "PERSON 2",
                url:""
            }
];

const Tools = () => {
    const getTools = () => {
        return k_json.map((tool) => {
            const styles = {
                backgroundImage: `url(${tool.image})`
            };
                    return (React.createElement("div", { key: tool.id, className: "tool-card" },
                React.createElement("div", { className: "tool-card-background background-image", style: styles }),
                React.createElement("div", { className: "tool-card-content" },
                    React.createElement("div", { className: "tool-card-content-header" },
                        React.createElement("span", { className: "tool-card-label" }, tool.label),
                        React.createElement("span", { className: "tool-card-name" }, tool.name)),
                    React.createElement("i", { className: classNames(tool.icon, "tool-card-icon") }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa-solid fa-solar-system", id: "tools-section", title: "SOCIALIZER" }, getTools()));
};
