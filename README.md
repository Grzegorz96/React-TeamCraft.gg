<img src="https://github.com/Grzegorz96/React-TeamCraft.gg/assets/129303867/49b775d7-ed61-483d-b1fe-3f35c07c3c22" alt="logo" width="100%" style="border-radius:50%" />

# TEAMCRAFT.GG

TeamCraft is an application created in React technology, dedicated to enthusiasts of team-based games. With its user-friendly interface and advanced features, TeamCraft allows users to quickly and efficiently create teams without the need to create an account. The application enables the rapid generation of teams based on the list of players entered by the user. TeamCraft gives users the option to choose between random team creation and balanced team building, ensuring both exciting challenges and fair gameplay.

Utilizing browser cache to store all data, TeamCraft eliminates the need for account creation. Users have access to their created events, teams, statistics, and history anytime, without the necessity of logging in. They can freely add, edit, and manage their teams. TeamCraft allows users to mark team wins, facilitating meticulous tracking of results. With access to the history of created teams and detailed statistics, users can analyze their achievements and those of their friends.

## Table of Contents

- [Uruchamianie projektu](#uruchamianie-projektu)
- [Struktura projektu](#struktura-projektu)
- [Skrypty](#skrypty)
- [Testowanie](#testowanie)


- [Description of the modules](#pomocne-zasoby)
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

index.jsx:
- The Index.jsx module serves as the entry point for the TeamCraft application, initiating the rendering process. This module uses ReactDOM.createRoot to render the root <App /> component in the HTML element with ID "root". Launches the user interface, making the application visually accessible. - Using the <BrowserRouter> component from react-router-dom, the Index.jsx file facilitates smooth navigation in the application. This is essential for switching between different views, improving the overall user experience in TeamCraft. The module imports the Index.scss stylesheet to apply styles to your application, ensuring a visually appealing and consistent design.

App.jsx: 
- The App.jsx module, as a central component in TeamCraft, plays a pivotal role in orchestrating key containers and managing the application's layout. This module employs context-based state management, utilizing <MainProvider> to facilitate seamless data flow across components. Renders components in the following order: ```<Header />, <Main />, and <Footer />```.







