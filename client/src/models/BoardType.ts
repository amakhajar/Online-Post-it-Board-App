import { PostitType } from "./PostitType"

interface BoardType{
    type?: string,
    id: number,
    title: string,
    notes?: string,
    postits: PostitType[],
}

export {BoardType}