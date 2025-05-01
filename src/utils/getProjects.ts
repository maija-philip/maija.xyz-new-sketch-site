import { Project } from "../pages/SpecificListPage";
import masterList from "../assets/data/master-list.json";

export default async function getProjects(
  folderName: string
): Promise<Project[] | undefined> {
  
  let files = masterList.list.filter((item) => item.folder === folderName);

  try {
    // for each file, fetch and process the json
    const projects = await Promise.all(
      files.map(async (filename) => {
        try {
          const response = await fetch(`/data/${filename.folder}/${filename.file}.json`);

          // fail gracefully
          if (!response.ok) {
            console.warn("Could not fetch file: ", filename.file);
            return null;
          }

          const projectJSON = await response.json();

          const project: Project = {
            tag: projectJSON["file-name"],
            folder: filename.folder,
            image: projectJSON.image,
            alt: projectJSON.alt,
            subtitle: projectJSON.subtitle,
          };

          return project;

        } catch (err) {
          console.error(`Error processing file: ${filename.file}`, err);
        }
      })
    );

    // remove undefined and null data
    const validProjects: Project[] = projects.filter(
      (project): project is Project => project !== null && project !== undefined
    );
    return validProjects;

  } catch (error) {
    // catch any errors
    console.error(error);
    return undefined;
  }
}
