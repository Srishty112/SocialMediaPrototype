// createst project
export const createProject =(project)=>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{

        const firestore= getFirestore();
        firestore.collection('project').add({
            ...project,
            createdAt: new Date(),
            Likedby:[],
            Likedbyid:[],
            Comments: []
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project:project});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}



//detetes project

export const deleteProject =(id)=>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{

        const firestore= getFirestore();
        firestore.collection('project').doc(id).delete()
        .then(()=>{
            dispatch({type: 'CREATE_PROJECT', project:id});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}


export const updateProject =(id, project, job, authid)=>{
//Likes project
  if(job==='like')
  return(dispatch,getState, {getFirebase, getFirestore})=>{

      const firestore= getFirestore();
      firestore.collection('project').doc(id).update({
        Likes:project.Likes+1,
        Likedbyid: (authid[0]).concat(project.Likedbyid),
        Likedby: (authid[1]).concat(project.Likedby),

      })
      .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
      }).catch((err)=>{
          dispatch({type: 'UPDATE_PROJECT_ERROR', err});
      })
  }
  //adds notification



//unlikes project

  if(job==='unlike')
  return(dispatch,getState, {getFirebase, getFirestore})=>{

      const firestore= getFirestore();
      firestore.collection('project').doc(id, job).update({
        Likes:project.Likes-1,
        Likedbyid: authid[0],
        Likedby: authid[1]

      })
      .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
      }).catch((err)=>{
          dispatch({type: 'UPDATE_PROJECT_ERROR', err});
      })
  }

//updates DP

  if(job==='dp')
  return(dispatch,getState, {getFirebase, getFirestore})=>{

      const firestore= getFirestore();
      firestore.collection('users').doc(id).update({
        image:project
      })
      .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
      }).catch((err)=>{
          dispatch({type: 'UPDATE_PROJECT_ERROR', err});
      })
  }

//update project details

  if(job==='update')
  return(dispatch,getState, {getFirebase, getFirestore})=>{

      const firestore= getFirestore();
      firestore.collection('project').doc(id,job).update({
        title: project.title,
        content: project.content

      })
      .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
      }).catch((err)=>{
          dispatch({type: 'UPDATE_PROJECT_ERROR', err});
      })
  }

  //Add comments

  if(job==='comment')
  return(dispatch,getState, {getFirebase, getFirestore})=>{

      const firestore= getFirestore();
      firestore.collection('project').doc(id).update({
        Comments:([authid]).concat(project.Comments),

      })
      .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
      }).catch((err)=>{
          dispatch({type: 'UPDATE_PROJECT_ERROR', err});
      })
  }


  //reply
  


  //deletes comment
  if(job==='deletecomment')
  return(dispatch,getState, {getFirebase, getFirestore})=>{

      const firestore= getFirestore();
      firestore.collection('project').doc(id).update({
        Comments:authid,

      })
      .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
      }).catch((err)=>{
          dispatch({type: 'UPDATE_PROJECT_ERROR', err});
      })
  }
}


export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }


export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNED_OUT' });
      })
    }
  }


export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        notice:[],
        noticeno:0,
        notifications: {},
        joinedon: new Date(),  
        image:''
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}


export const deletenoticeno =(id)=>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{
  
        const firestore= getFirestore();
        firestore.collection('users').doc(id).update({
          noticeno:0
        })
        .then(()=>{
            dispatch({type: 'UPDATE_PROJECT', project:id});
        }).catch((err)=>{
            dispatch({type: 'UPDATE_PROJECT_ERROR', err});
        })
      }}

      
export const addnotice =(id, notice, pid,n, nno)=>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{
      n=n.slice(0,6)
      const firestore= getFirestore();
      firestore.collection('users').doc(id).update({
          noticeno:nno+1,
          notice:[{id:pid, notice:notice, date: new Date() }].concat(n)
        })
         .then(()=>{
          dispatch({type: 'UPDATE_PROJECT', project:id});
       }).catch((err)=>{
         dispatch({type: 'UPDATE_PROJECT_ERROR', err});
        })
      }}
    
    