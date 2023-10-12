
const url_14 = "";
let p_json=[ {
                desc: "MNNIT",
                id: 6,
                image: "http://www.mnnit.ac.in/institutelogo/MNNIT%20Logo%20New.jpg",
              icon:"fa-duotone fa-screen-users",
                title: "MNNIT",
            url:"http://www.mnnit.ac.in"
            }];
const Movies = () => {
     const  getMovies =  () => {
    // const  getMovies = async () => {
        // const p_json=await get_json(url_14);
        return p_json.map((movie) => {
            const styles = {
                backgroundImage: `url(${movie.image})`
            };
            const id = `movie-card-${movie.id}`;
            return (React.createElement("div", { key: movie.id, id: id, className: "movie-card",href:movie.url },
                React.createElement("div", { className: "movie-card-background background-image", style: styles }),
                React.createElement("div", { className: "movie-card-content" },
                    React.createElement("div", { className: "movie-card-info" },
                        React.createElement("span", { className: "movie-card-title" }, movie.title),
                        React.createElement("span", { className: "movie-card-desc" }, movie.desc)),
                    React.createElement("i", { className: movie.icon }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa fa-circle-o-notch", id: "movies-section", scrollable: true, title: "Upcomming Events" }, getMovies()));
};
