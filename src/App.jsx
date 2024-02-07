import Footer from "./containers/footer/FooterContainer";
import Header from "./containers/header/HeaderContainer";
import Main from "./containers/main/MainContainer";
import { GeneratorProvider } from "./context/generator/GeneratorProvider";

function App() {
    return (
        <GeneratorProvider>
            <Header />
            <Main />
            <Footer />
        </GeneratorProvider>
    );
}

export default App;
