import { Project } from "../pages/SpecificListPage";
import masterList from "../assets/data/master-list.json"

export default function getProjects(folderName: string) : [Project] | [] | undefined {

    let files = masterList.list.filter((item) => item.folder === folderName)
    
    Promise.all(
        files.map((filename) => {
            fetch(`${folderName}/${filename.folder}.json`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return null
            })
            .then((projectJSON) => {
                console.log("json", projectJSON)
                return {
                    tag: projectJSON['file-name'],
                    image: projectJSON.image,
                    alt: projectJSON.alt,
                    subtitle: projectJSON.subtitle
                }
            })
            .catch((error) => {
                console.error(error);
                return null;
            })
        })
      ).then((projects) => {
        console.log(projects)
        return projects;
      });

    return undefined
}