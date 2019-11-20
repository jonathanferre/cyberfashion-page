import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

//Action creator
export function CategorySelected(category) {

    dispatcher.dispatch({
        actionType: 
    })


  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      //Action
      actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function ManCategory(){
    dispatcher.dispatch({
        actionType: actionType.ManCategory
    })
}

