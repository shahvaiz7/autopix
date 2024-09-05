import firebase from '../component/firebase'

export async function  usersData(userRetrived){

    var UserList=[]
    var snapshot = await firebase.firestore()
                                  .collection('user')
                                  .orderBy("name")
                                  .get()
    
    snapshot.forEach((doc)=> {
        const userDoc =doc.data()
        UserList.push(userDoc)
    })
    userRetrived(UserList)

}