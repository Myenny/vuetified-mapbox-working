let _messagesDb = null;

class Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCLyusIISZ2SEhcK7g_Qi5EN2p9qZavADc',
      authDomain: 'idfk-happy.firebaseapp.com"',
      projectId: 'idfk-happy',
    });

    // initialize Firestore through Firebase
    _messagesDb = firebase.firestore();

    // disable deprecated features
    _messagesDb.settings({
      timestampsInSnapshots: true
    });
  }
  setAuthStateListener(listener) {
    firebase.auth().onAuthStateChanged(listener);
  }

  setMessagesListener(listener) {
    _messagesDb.collection('messages').orderBy('createdAt', 'desc').limit(10).onSnapshot(listener);
  }

  async setToken(token) {
    await firebase.auth().signInWithCustomToken(token);
  }

  async addMessage(message) {
    const createdAt = new Date();
    const author = firebase.auth().currentUser.displayName;
    return await _messagesDb.collection('messages').add({
      author,
      createdAt,
      message,
    });
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  async updateProfile(profile) {
    if (!firebase.auth().currentUser) return;
    await firebase.auth().currentUser.updateProfile({
      displayName: profile.name,
      photoURL: profile.picture,
    });
  }

  async signOut() {
    await firebase.auth().signOut();
  }
}

const firebaseClient = new Firebase();