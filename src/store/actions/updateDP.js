export const handleDP =(Link, id)=>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{
  
        const firestore= getFirestore();
        firestore.collection('users').doc(id).update({
          image: Link
  
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', id});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
  }

