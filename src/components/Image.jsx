import { Projects } from './Projects';

export function Image() {
  Projects.map((project) => {
    return (
      <img
        key={project.id}
        src={require(`../previews/${project.image}-preview.png`)}
        className="proj-img"
        alt="project preview"
      />
    );
  });
}
