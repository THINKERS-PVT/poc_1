

const Menu = () => {
    return (React.createElement("div", { id: "app-menu" },
        React.createElement("div", { id: "app-menu-content-wrapper" },
            React.createElement("div", { id: "app-menu-content" },
                React.createElement("div", { id: "app-menu-content-header" },
                    React.createElement("div", { className: "app-menu-content-header-section" },
                        React.createElement(Info, { id: "app-menu-info" }),
                        React.createElement(Reminder, null)),
                    React.createElement("div", { className: "app-menu-content-header-section" },
                        React.createElement(UserStatusButton, { icon: "fa-solid fa-arrow-right-from-arc", id: "sign-out-button", userStatus: UserStatus.LoggedOut }))),
                React.createElement(QuickNav, null),
                React.createElement("a", { id: "youtube-link", className: "clear-button", href: "https://thinkerrs.com/", target: "_blank" },
                    React.createElement("i", { className: "fa-regular fa-spider-web" }),
                    React.createElement("span", null, "THINKERS PRIVATE LIMITED")),
                React.createElement(Projects, null),
                // React.createElement(Restaurants, null),
                 React.createElement(Ginel, null),
                React.createElement(Tools, null),
                React.createElement(Movies, null)))));
};
