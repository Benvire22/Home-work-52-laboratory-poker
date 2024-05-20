import './App.css';
import Card from "./components/Card/Card.tsx";

const App = () => (
    <>
        <div className="playingCards faceImages">
            <Card rank="k" suit="diams" />
            <Card rank="2" suit="hearts" />
            <Card rank="3" suit="spades" />
            <Card rank="4" suit="clubs" />
            <Card rank="a" suit="hearts" />
        </div>
    </>
);

export default App;
