const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.test = functions.https.onRequest((req, res) => {
    admin.firestore()
    .collection('test')
    .get()
    .then((data) => {
        let test = [];
        data.forEach((doc) => {
            test.push(doc.data());
        });
        return res.json(test);
    })
    .catch((err) => console.error(err));
});

exports.createTest = functions.https.onRequest((req, res) => {
    const newTest = {
        userName: req.body.userName,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };

    admin.firestore()
    .collection('test')
    .add(newTest)
    .then((doc) => {
        return res.json({ message: `Document ${doc.id} was created` });
    })
    .catch((err) => {
        res.status(500).json({ error: 'Something went wrong' });
        console.error(err);
    });
});
