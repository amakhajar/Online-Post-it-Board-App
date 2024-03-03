import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardType } from "../../models/BoardType";
import { PostitType } from "../../models/PostitType";

const data: BoardType[] = [
  {
    type: "board",
    id: 1,
    title: "TIW 8",
    notes: "",
    postits: [
      {
        type: "postit",
        id: 1,
        board: "1",
        title: "TP 1",
        text: "Le TP porte sur des rappels de developpement Web ",
        visible: true,
        color: "#f9fafb",
      },
      {
        type: "postit",
        id: 2,
        board: "1",
        title: "TP 2",
        text: "Le TP porte sur la creation d'un outil de presentation HTML",
        visible: true,
        color: "#f9fafb",
      },
      {
        type: "postit",
        board: "1",
        id: 3,
        title: "TP 3",
        text: "Le TP 3",
        visible: true,
        color: "#f9fafb",
      },
      {
        type: "postit",
        board: "1",
        id: 4,
        title: "TP 4",
        text: "Le TP 4",
        visible: true,
        color: "#f9fafb",
      },
    ]
  },
  {
    type: "board",
    id: 2,
    title: "Analyse de données",
    notes: "",
    postits: []

  },
]


interface BoardState {
  value: BoardType[];
  likedPostits: PostitType[];
  currentBoard: BoardType
  
}

const initialState: BoardState = {
  value: data,
  likedPostits: [],
  currentBoard: null
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<number>) => {
     state.currentBoard=state.value.find(board=>(board.id===action.payload))
    },
    addPostit: (state, action: PayloadAction<{ newPostit: PostitType; boardid: number }>) => {
      state.value.find((board) => board.id == action.payload.boardid).postits.push(action.payload.newPostit)

    },
    deletePostit: (state, action: PayloadAction<{ postitid: number; boardid: number }>) => {
      state.value.find((board) => board.id == action.payload.boardid).postits=state.value.find((board) => board.id == action.payload.boardid).postits.filter(post => post.id != action.payload.postitid)
    },
    hidePostit: (state, action: PayloadAction<{ postitid: number; boardid: number }>) => {

      const postTohide = state.value.find((board) => board.id == action.payload.boardid).postits.find((post) => post.id == action.payload.postitid)
      postTohide.visible =!postTohide.visible
      state.value.find((board) => board.id == action.payload.boardid).postits.filter((post) => post != postTohide)
    },
    likePostit: (state, action: PayloadAction<{ postitid: number; boardid: number }>) => {

      const postToLike = state.value.find((board) => board.id == action.payload.boardid).postits.find((post) => post.id == action.payload.postitid)
      postToLike.liked =!postToLike.liked
      if(postToLike.liked){
      state.likedPostits.push(postToLike)}
      else{
        state.likedPostits=state.likedPostits.filter(post => post.id!= postToLike.id)
      }
    },
    addBoard: (state, action: PayloadAction<{ title: string; notes?: string }>) => {
      let newBoard:BoardType={
        type:'board',
        id:state.value.length+1,
        title:action.payload.title,
        postits:[],
        notes:action.payload.notes
      }
      state.value.push(newBoard)

    },
    editPostit: (state, action: PayloadAction<{ postitid: number; boardid: number; title:string;content?:string}>) => {
     
      state.value.find((board) => board.id == action.payload.boardid).postits.find((post) => post.id == action.payload.postitid).title=action.payload.title

    },

  }
});

export const { setBoard, addPostit, deletePostit, hidePostit,likePostit,addBoard,editPostit } = boardSlice.actions;

export default boardSlice.reducer;
