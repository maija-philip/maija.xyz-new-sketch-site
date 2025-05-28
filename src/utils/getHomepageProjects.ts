import { Project } from "../pages/SpecificListPage";
import masterList from "../assets/data/master-list.json";
import homepageProjects from "../assets/data/homepage-projects.json";

export default async function getHomepageProjects(): Promise<
  Project[] | undefined
> {
  const projects = await Promise.all(
    homepageProjects.names.map(async (name) => {
      let itemDetails = masterList.list.filter((item) => item.file === name);

      if (itemDetails.length >= 1) {
        return await getSpecificProjectInfo(name, itemDetails[0].folder);
      }
      console.error("ERROR: cannot find data for: ", name);
      return undefined;
    })
  );

  return projects.filter((item): item is Project => item !== undefined);
}

async function getSpecificProjectInfo(
  file: string,
  folder: string
): Promise<Project | undefined> {

  // fetch and process the json
  try {
    const response = await fetch(`/data/${folder}/${file}.json`);

    // fail gracefully
    if (!response.ok) {
      console.warn("Could not fetch file: ", file);
      return undefined;
    }

    const projectJSON = await response.json();

    const project: Project = {
      tag: projectJSON["file-name"],
      folder: folder,
      image: projectJSON.image,
      alt: projectJSON.alt,
      subtitle: projectJSON.subtitle,
    };

    return project;

  } catch (err) {
    console.error(`Error processing file: ${file}`, err);
    return undefined
  }
}
