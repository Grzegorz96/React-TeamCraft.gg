import Footer from "./containers/footer/FooterContainer";
import Header from "./containers/header/HeaderContainer";
import Main from "./containers/main/MainContainer";
import { MainProvider } from "./context/MainProvider";

function App() {
    // Rendering the App component, which includes Header, Main, and Footer within MainProvider.
    return (
        <MainProvider>
            <Header />
            <Main />
            <Footer />
        </MainProvider>
    );
}

export default App;
