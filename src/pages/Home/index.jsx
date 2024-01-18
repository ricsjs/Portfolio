import "./index.css"
import Apresentation from "../../components/Apresentation"
import Header from "../../components/Layout/Header"

export default function Home() {
    return (
        <div className="home-content">
            <Header />
            <Apresentation />
        </div>
    )
}