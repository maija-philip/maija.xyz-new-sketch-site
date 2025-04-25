import { ItemDetails } from "../pages/InfoPage";
import masterList from "../assets/data/master-list.json"

export default async function getProjectInfo(tag: string) : Promise<ItemDetails | undefined> {
    let itemFolder = masterList.list.filter((item) => item.file === tag)[0].folder

    try {
        const response = await fetch(`/data/${itemFolder}/${tag}.json`)

        if (response.status !== 200) {
            return undefined
        }
        
        const projectData = await response.json()
        console.log(projectData)
        return projectData
        
    } catch (error) {
        console.error("ERROR: ", error)
    }
    
    return undefined
}