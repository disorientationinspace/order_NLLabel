import "./App.scss";
import Contacts from "./components/Contacts/Contacts";
import ContactUs from "./components/ContactUs/ContactUs";
import Doubts from "./components/Doubts/Doubts";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Intro from "./components/Intro/Intro";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <Info />
        <Doubts />
        <Team />
        <ContactUs />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
