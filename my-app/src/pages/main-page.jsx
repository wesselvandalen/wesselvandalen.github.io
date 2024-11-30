import Home from '../components/home';
import About from '../components/about';
import Education from '../components/education';
import Work from '../components/work';

export default function MainPage() {
    return (
        <>
            <Home />
            <div className="main-content">
                <About />
                <Education />
                <Work />
                {/* <Stack /> */}
            </div>
        </>
    );
}