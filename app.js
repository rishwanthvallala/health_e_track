var firebaseConfig = {
    apiKey: "YOUR API KEY",
    authDomain: "test-b9501.firebaseapp.com",
    projectId: "test-b9501",
    storageBucket: "test-b9501.appspot.com",
    messagingSenderId: "962648799418",
    appId: "1:962648799418:web:f7e2af48768872d3e8ea83",
    measurementId: "G-P3GC0WC7X2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
        image.src = url
    });
});
