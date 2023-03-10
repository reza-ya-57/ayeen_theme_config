import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

//datas of questions section 
const questionDatas = [
    // {
    //   id: Math.random(),
    //   number: 1,
    //   type: "INPUT",
    //   questionContent: "لطفا ایمیل خود را وارد کنید:",
    //   userAnswer: "",
    // } ,
    // {
    //   id: Math.random(),
    //   number: 2,
    //   type: "INPUT",
    //   questionContent: "لطفا شماره تماس خود را وارد کنید:",
    //   userAnswer: "",
    // },
    // {
    //   id: Math.random(),
    //   number: 4,
    //   type: "RADIO",
    //   questionContent: "لطفا جنسیت خود را تعیین کنید",
    //   answers: ["مرد"  , "زن" , "سایر"],
    //   userAnswer: "",
    // },
    // {
    //   id: Math.random(),
    //   number: 3,
    //   type: "DROP_DOWN",
    //   questionContent:"لطفا تاریخ تولد خود را وارد کنید",
    //   userAnswer: '' , 
    // },

    {
      id: Math.random(),
      number: 1,
      type: "Drop_Down",
      caption: "please choose your instrument:",
      options: ["guitar" , "violin" , "piano"],
      nextBtnDisable: true
    }

  ]
  

const initialState = {
    index: 0,
    datas: questionDatas,
    currensObject: {}
}

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
      nextButton(state) {
        state.index += 1
        // state.currensObject = state.datas[state.index]
        // console.log(state.currensObject)
      }
    }
})

export const { nextButton } = questionSlice.actions;

export const store = configureStore({
    reducer: {
        questions: questionSlice.reducer
    },
})