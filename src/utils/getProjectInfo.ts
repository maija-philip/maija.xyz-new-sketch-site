import { ItemDetails } from "../pages/InfoPage";
import masterList from "../assets/data/master-list.json"

/**
 * Given a filename or 'tag', this fetches the project info json data from that file 
 * 
 * @param tag filename for the project info 
 * @returns ItemDetails unless there is an error fetching the file info, then returns undefined
 */
export default async function getProjectInfo(tag: string) : Promise<ItemDetails | undefined> {
    // get the folder name from the master list
    let itemFolder = masterList.list.filter((item) => item.file === tag)[0]
    
    if (!itemFolder || !itemFolder.hasOwnProperty('folder')) {
        return undefined;
    }

    // fetch and return the data
    try {
        const response = await fetch(`/data/${itemFolder.folder}/${tag}.json`)

        if (response.status !== 200) {
            return undefined
        }
        
        const projectData = await response.json()
        projectData.folder = itemFolder.folder;
        return projectData
        
    } catch (error) {
        console.error("ERROR: ", error)
    }
    
    return undefined
}