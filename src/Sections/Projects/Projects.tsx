import './Projects.css';
import ProjectOneImage from '../../assets/images/ProjectCootImage.png';
import ProjectThreeImage from '../../assets/images/NetFlix.png';
import ProjectfourImage from '../../assets/images/Olx.png';
import {useMemo} from "react";
import {Project as ProjectType} from "../../Types/Project.ts";
import {Project} from  "../";

export const Projects= () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [
        {
            title: 'Street Wear',
            subtitle: 'Mens Shoes online shoping',
            description: " In this Project Used Django,PSQL,HTML,CSS,AJAX, It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",

            github: 'https://github.com/FASIL-K/StreetWear',
            website: '',
            image: ProjectOneImage,
            techStack: ['React', 'Django', 'PostgreSQL', 'Docker', 'Nginx','Ajax', 'CSS']
        },
        {
            title: 'Netflix',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: 'https://github.com/FASIL-K/netflix-react',
            website: '',
            image:ProjectThreeImage, 
            techStack: ['React','firebase','axios','redux']
        },{
            title: 'Olx',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: 'https://github.com/FASIL-K/olx_clone-react',
            website: '',
            image:ProjectfourImage, 
            techStack: ['React','firebase','axios','redux']
        },
      
    ], []);

    return (
        <section id={'projects'} className={'projects container'}>
            <div className={'projects__header'}>
                <p className={'projects__heading'}>Projects</p>
                <p className={'projects__subheading'}>Works, I'm most proud of</p>
            </div>
            <div className={'projects__list'}>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </section>
    );
};