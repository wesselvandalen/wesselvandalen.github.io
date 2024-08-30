import './projects-view.css';
import ProductBlock from './project-block';
import luftanVisual from '../assets/projects/luftan_visual.png';
import huskelisteVisual from '../assets/projects/huskelisteVisual.png';
import kpnVisual from '../assets/projects/kpnVisual.png';

function ProjectsView() {
    return (
        <div className='projects-view-container' id='projects'>
            <div className="projects-view-content">
                <h3 className='projects-view-title'>Explore my projects</h3>
                <p className='projects-view-description'>A selection of my standout projects, showcasing my work.</p>

                <div className="projects-container">
                    <div className="projects-content">

                        <ProductBlock
                            key={1}
                            image={luftanVisual}
                            name={'Luftan'}
                            description={"Luftan is a fictional Swedish company I created to showcase my skills in front-end and back-end development, database management, and design. Specializing in aroma diffusers and Scandinavian-inspired scents, Luftan allows users to browse, add products to their cart, and place orders easily. While the interface is simple, the underlying code is complex, providing a rewarding challenge."}
                            link={'/'}
                        />

                        <ProductBlock
                            key={2}
                            image={luftanVisual}
                            name={'SmartFinance'}
                            description={''}
                            link={'/http://159.223.223.166:8080/'}
                        />

                        <ProductBlock
                            key={3}
                            image={kpnVisual}
                            name={'KPN Reisbewegingen'}
                            description={''}
                            link={'/https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/'}
                        />

                        <ProductBlock
                            key={4}
                            image={huskelisteVisual}
                            name={'HuskeListe'}
                            description={''}
                            link={'/https://wesselvandalen.github.io/huskeliste/'}
                        />
                            
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectsView;