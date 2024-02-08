interface PostitType {
    type?: string,
    id:number,
    board: string,
    title: string,
    text: string,
    visible?: boolean,
    liked?:boolean,
    color?: string,
}

export {PostitType}