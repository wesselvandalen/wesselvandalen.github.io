import './projects-view.css';
import ProductBlock from './project-block';
import luftan from '../assets/projects/luftan.png';
import huskeliste from '../assets/projects/huskeliste.png';
import kpn from '../assets/projects/kpn.png';
import smartfinance from '../assets/projects/smartfinance.png';

function ProjectsView() {
    return (
        <div className='projects-view-container' id='projects'>
            <div className="projects-view-content">
                <h3 className='projects-view-title'>Explore my <span className='projects'>projects</span></h3>
                <p className='projects-view-description'>A selection of my standout projects, showcasing my work.</p>

                <div className="projects-container">
                    <div className="projects-content">

                        <ProductBlock
                            key={1}
                            image={luftan}
                            name={'Luftan'}
                            description={`Luftan is a Swedish company specializing in aroma diffusers and Scandinavian-inspired scents. The project includes a full e-commerce platform where users can browse products, add items to their cart, and place orders. I developed the entire site from scratch, covering both front-end and back-end development.`}
                            link={'/'}
                        />

                        <ProductBlock
                            key={2}
                            image={smartfinance}
                            name={'SmartFinance'}
                            description={`SmartFinance is a web application for Hogeschool Utrecht's 'Bedrijfskunde' students. It helps them practice creating 'jaarrekeningen' (annual financial statements) and provides immediate feedback to prepare for tests and homework.`}
                            link={'/http://159.223.223.166:8080/'}
                        />

                        <ProductBlock
                            key={3}
                            image={kpn}
                            name={'KPN Reisbewegingen'}
                            description={`KPN Reisbewegingen is a site for KPN employees to log their travel data, which is then compiled into an Excel report. Managers can view departmental statistics, and a leaderboard encourages reducing CO2 emissions.`}
                            link={'/https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/'}
                        />

                        <ProductBlock
                            key={4}
                            image={huskeliste}
                            name={'HuskeListe'}
                            description={`HuskeListe is a simple Norwegian to-do app that allows users to add, cross off, and remove tasks from their lists, helping them stay organized.`}
                            link={'/https://wesselvandalen.github.io/huskeliste/'}
                        />
                            
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectsView;