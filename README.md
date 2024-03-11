<img src="https://github.com/Grzegorz96/React-TeamCraft.gg/assets/129303867/49b775d7-ed61-483d-b1fe-3f35c07c3c22" alt="logo" width="100%" />

# TEAMCRAFT.GG

TeamCraft is an application created in React technology, dedicated to enthusiasts of team-based games. With its user-friendly interface and advanced features, TeamCraft allows users to quickly and efficiently create teams without the need to create an account. The application enables the rapid generation of teams based on the list of players entered by the user. TeamCraft gives users the option to choose between random team creation and balanced team building, ensuring both exciting challenges and fair gameplay.

Utilizing browser cache to store all data, TeamCraft eliminates the need for account creation. Users have access to their created events, teams, statistics, and history anytime, without the necessity of logging in. They can freely add, edit, and manage their teams. TeamCraft allows users to mark team wins, facilitating meticulous tracking of results. With access to the history of created teams and detailed statistics, users can analyze their achievements and those of their friends.

## Table of Contents
- [Description of the modules](#Description-of-the-modules)
- [Features](#Featured)
- [Technology used](#Technology-used)
- [Installation](#Installation)
- [Lessons learned](#Lessons-learned)
- [Features to be implemented](#Features-to-be-implemented)
- [Authors](#Authors)
- [Contact](#Contact)
- [License](#License)
- [Screnshoots](#Screnshoots)

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

### Main:
MainContainer.jsx:
- MainContainer.jsx is a module that collects the main views of the application and organizes them into paths. Responsible for conditionally rendering the appropriate view, depending on the current path the user is on.

HomeComponent.jsx:
- The HomeComponent.jsx module plays a role in rendering the view of the first page of the application, i.e. the so-called "home page".

GeneratorContainer.jsx:
- The GeneratorContainer.jsx module plays a key role in generating teams on the website, having its own local state. It is responsible for all the logic associated with this process, conducting all operations based on its internal state. An important feature of this module is the delayed saving of all introduced changes to the global application state. In practice, this means that only when the user decides to accept the generated team will any modifications be transferred and saved to the general state of the application. This approach provides control and consistency of data, allowing the user to customize the team before final approval.

GeneratorComponent.jsx:
- The GeneratorComponent.jsx module plays a key role in rendering a "subpage" for the generator depending on the current state of the application. Its task is to adapt the appearance and functionality depending on the different stages of the generation process. Thanks to this, depending on the current state, this module effectively presents the appropriate components and data to the user, creating a dynamic and intuitive interaction within the team generator.

GeneratedTeamsComponent.jsx:
- The GeneratedTeamsComponent.jsx module is responsible for rendering the application view presenting the generated teams. Its main task is to construct a user interface that effectively presents information about the generated teams. Thanks to this module, the user can easily view and analyze team compositions.

SetPlayersComponent.jsx:
- The SetPlayersComponent.jsx module is responsible for rendering the application view that allows the user to set up players to generate teams. Its main task is to create an interface enabling convenient entry of information about participants, such as names and other important data related to the team generation process. Thanks to this component, the user can configure team generation parameters according to their own preferences and needs.

SelectOptionsComponent.jsx:
- The SelectOptionsComponent.jsx module is responsible for rendering the application view where the user can adjust the settings regarding the number of players and teams. Its main purpose is to allow the user to flexibly configure team generation parameters before moving on to the next steps of the process.

MyTeamsContainer.jsx:
- The MyTeamsContainer.jsx module plays a key role in the website logic for displaying and editing teams. It has its own local state, which is the basis for carrying out all operations related to modifying teams, players and deleting entire events. It is worth noting that any changes made by the user, such as modifying teams, players or deleting entire events, will be reflected in the global state of the application.
  
MyTeamsComponent.jsx
- The MyTeamsComponent.jsx module is responsible for generating appropriate views for the "My Teams" section depending on the current local state of this section. Its main task is to provide a dynamic user interface that reflects the current state in the "My Teams" section. Thanks to this module, the user can effectively view, edit or delete teams depending on what he wants to do.

EditEventComponent.jsx
- The EditEventComponent.jsx module is responsible for rendering the event edit view in the "My Teams" section, depending on the specific event selected by the user. Thanks to this module, the user can effectively modify information related to the selected event and its users.

DisplayEventsComponent.jsx
- The DisplayEventsComponent.jsx module is responsible for rendering the view with events, which contains information about teams and players, in the "My Teams" section. Its main task is to present an organized list of events with related data about teams and players.

StatsContainer.jsx:
- The StatsContainer.jsx module contains logic to calculate statistics, which are then used by child components to render views appropriately. Its task is to analyze data and generate important statistics that enable the presentation of information to the user on various aspects of the application. Thanks to this approach, child components can dynamically render views depending on current statistics, which contributes to a flexible and interactive presentation of data to the user.

StatsComponent.jsx:
- The StatsComponent.jsx module is responsible for triggering the rendering of the child component. Its main task is to initiate the rendering process.

DisplayEventsStatsComponent.jsx:
- The DisplayEventsStatsComponent.jsx module is responsible for displaying events along with calculated statistics. This component uses information about events retrieved from the global state of the application, and functions for calculating statistical data are provided by the parent container. Its main goal is to present a clear view that includes events with appropriate statistics, thanks to cooperation with the data provided by the container.

NotFoundComponent.jsx:
- The NotFoundComponent.jsx module is responsible for rendering the view that is presented to the user when he or she enters an incorrect location address in the application. Its main task is to provide the user with information that the page with the given address does not exist or cannot be found.

### Footer:
FooterContainer.jsx:
- The FooterContainer.jsx module acts as the parent component and is responsible for triggering the FooterComponent rendering process. Its task is to initiate the rendering of the footer component (FooterComponent), which allows the presentation of information about the footer on the page.

FooterComponent.jsx:
- The FooterComponent.jsx module is responsible for rendering the footer along with the counter of active events and images. This component retrieves information about active events from the global application state and presents it in the footer in the form of a counter.

### Shared:
PopupComponent.jsx:
- The PopupComponent.jsx module is responsible for rendering the popup element with dynamically passed information that it receives as props. Its main task is to present the user with various messages, warnings or information in the form of a window that can be activated in appropriate situations in the application.

StarsWrapperComponent.jsx:
-The StarsWrapperComponent.jsx module is responsible for rendering the container element with stars, which are colored gold depending on the player's rating that will be passed in props.

### Context:
MainContext.jsx:
- The MainContext.jsx module is responsible for creating and managing the main context of the application, containing an object of the main available actions, a function that returns the initial main state (depending on whether the previous state was retrieved from the browser cache), and a reducer function that handles operations on the main state application.

MainProvider.jsx:
- The MainProvider.jsx module is responsible for providing the main state to the application along with functions to handle this state. It is a component that provides a context (provider) for the main state that can be used by various components in the application.

### Reducers:
generator-reducer:
- The structure of the generator-reducer folder contains files for the initialization state, action types and reducer for the generator module.

my-teams-reducer:
- The structure of the my-teams-reducer folder contains files for the initialization state, action types and reducer for the myteams module.

### utils:
- The structure of the utils folder contains the necessary tools for the application's operation, offering, among others, functions for handling dynamic styles, operations on the browser's local memory, generating the current date and algorithms used to generate teams.
