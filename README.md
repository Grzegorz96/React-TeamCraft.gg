<img src="https://github.com/Grzegorz96/React-TeamCraft.gg/assets/129303867/49b775d7-ed61-483d-b1fe-3f35c07c3c22" alt="logo" width="100%" style="border-radius:50%" />

# TEAMCRAFT.GG

TeamCraft is an application created in React technology, dedicated to enthusiasts of team-based games. With its user-friendly interface and advanced features, TeamCraft allows users to quickly and efficiently create teams without the need to create an account. The application enables the rapid generation of teams based on the list of players entered by the user. TeamCraft gives users the option to choose between random team creation and balanced team building, ensuring both exciting challenges and fair gameplay.

Utilizing browser cache to store all data, TeamCraft eliminates the need for account creation. Users have access to their created events, teams, statistics, and history anytime, without the necessity of logging in. They can freely add, edit, and manage their teams. TeamCraft allows users to mark team wins, facilitating meticulous tracking of results. With access to the history of created teams and detailed statistics, users can analyze their achievements and those of their friends.

## Table of Contents

- [Uruchamianie projektu](#uruchamianie-projektu)
- [Struktura projektu](#struktura-projektu)
- [Skrypty](#skrypty)
- [Testowanie](#testowanie)


- [Description of the modules](#description-of-the-modules)
- [Features](#znane-problemy)
- [Technology used](#dopłaty)
- [Installation](#licencja)
- [Lessons Learned](#pomocne-zasoby)
- [Features to be implemented](#znane-problemy)
- [Authors](#dopłaty)
- [Contact](#licencja)
- [License](#licencja)
- [Screnshoots](#licencja)

## Description of the modules

### Core:
index.jsx:
- The Index.jsx module serves as the entry point for the TeamCraft application, initiating the rendering process. This module uses ReactDOM.createRoot to render the root <App /> component in the HTML element with ID "root". Launches the user interface, making the application visually accessible. - Using the <BrowserRouter> component from react-router-dom, the Index.jsx file facilitates smooth navigation in the application. This is essential for switching between different views, improving the overall user experience in TeamCraft. The module imports the Index.scss stylesheet to apply styles to your application, ensuring a visually appealing and consistent design.

App.jsx: 
- The App.jsx module, as a central component in TeamCraft, plays a pivotal role in orchestrating key containers and managing the application's layout. This module employs context-based state management, utilizing <MainProvider> to facilitate seamless data flow across components. Renders components in the following order: ```<Header />, <Main />, and <Footer />```.

### Header:
HeaderContainer.jsx:
- The HeaderContainer.jsx module plays a key role in the logic related to the dropdown menu and the "hamburger" navigation button. Its task is to manage the logic of these elements and initiate the rendering of the HeaderComponent, which is responsible for the comprehensive rendering of the entire page header. Thanks to this approach, this module focuses on handling user interactions related to menus and organizes the header structure, which contributes to the consistent and effective operation of components in the application header area.

HeaderComponent.jsx:
- The HeaderComponent.jsx module plays a key role in rendering the entire header, including both NavbarComponent and DropdownMenuComponent. It is worth noting that this module is flexible, allowing dynamic adaptation to changing conditions using properties (props). This allows this module to customize the appearance and functionality of the header depending on dynamic props, making it extremely versatile and ready to handle a variety of use cases.

NavbarComponent.jsx:
- The NavbarComponent.jsx module is responsible for rendering navigation elements in the application, which are represented as links. The key feature of this module is the ability to customize dynamic classes, functions assigned to buttons, and set tabindex, which contributes to the flexibility and customization of navigation elements. Thanks to these dynamic properties, NavbarComponent.jsx allows you to easily modify the appearance and behavior of the navigation depending on the user's current actions.

DropdownMenu.jsx:
- The DropdownMenuComponent.jsx module plays a key role in rendering the "hamburger menu" button and drop-down menu element, responsible for handling navigation on smaller screens. This is an important component that allows you to effectively manage access to navigation options on devices with limited screen space.



