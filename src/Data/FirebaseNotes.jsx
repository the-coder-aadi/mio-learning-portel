export const FirebaseNotes = [
    {
  "id": 33,
  "slug": "firebase-introduction-setup-and-firestore-basics",
  "title": "CRUD Operations with Firebase Firestore",
  "date": "30 July 2026",

  "description": "Learn what Firebase is, why we use it, how to setup Firebase in a React application, how initialization works, and how to use Firestore with collections, documents, CRUD.",

  "content": [

    {
      "type": "heading",
      "text": "What is Firebase?"
    },

    {
      "type": "paragraph",
      "text": "Firebase is a Backend as a Service (BaaS) platform provided by Google. It gives ready-made backend services like authentication, database, storage and hosting so developers do not need to build everything from scratch."
    },

    {
      "type": "heading",
      "text": "Why Do We Use Firebase?"
    },

    {
      "type": "paragraph",
      "text": "Normally an application needs a backend server, APIs and a database. Firebase provides many backend features directly, which makes development faster and easier."
    },

    {
      "type": "summary",
      "items": [
        "Authentication for login and signup.",
        "Firestore Database for storing application data.",
        "Storage for images and files.",
        "Hosting for deploying applications."
      ]
    },

    {
      "type": "heading",
      "text": "Firebase Architecture"
    },

    {
      "type": "code",
      "language": "text",
      "text": "React App\n    |\n    |\n Firebase\n    |\n ----------------\n |       |       |\nAuth Firestore Storage"
    },

    {
      "type": "heading",
      "text": "Firebase Setup Step 1: Create Project"
    },

    {
      "type": "paragraph",
      "text": "First create a project from Firebase Console. A Firebase project represents your application inside Firebase."
    },

    {
      "type": "heading",
      "text": "Firebase Setup Step 2: Add Web App"
    },

    {
      "type": "paragraph",
      "text": "After creating a project, we add our web application. Firebase provides a configuration object that connects our app with the Firebase project."
    },

    {
      "type": "code",
      "language": "javascript",
      "text": "const firebaseConfig = {\n apiKey: \"YOUR_API_KEY\",\n authDomain: \"YOUR_DOMAIN\",\n projectId: \"YOUR_PROJECT_ID\",\n storageBucket: \"YOUR_BUCKET\",\n messagingSenderId: \"YOUR_ID\",\n appId: \"YOUR_APP_ID\"\n};"
    },

    {
      "type": "heading",
      "text": "What is Firebase Config?"
    },

    {
      "type": "paragraph",
      "text": "Firebase config contains project information that tells Firebase which project our application wants to connect with. Without this configuration Firebase cannot identify our project."
    },

    {
      "type": "heading",
      "text": "Installing Firebase SDK"
    },

    {
      "type": "code",
      "language": "bash",
      "text": "npm install firebase"
    },

    {
      "type": "heading",
      "text": "What is initializeApp()?"
    },

    {
      "type": "paragraph",
      "text": "initializeApp() creates a connection between our application and Firebase. It uses the Firebase configuration object and initializes Firebase services for our project."
    },

    {
      "type": "code",
      "language": "javascript",
      "text": "import { initializeApp } from 'firebase/app';\n\nconst app = initializeApp(firebaseConfig);"
    },

    {
      "type": "summary",
      "items": [
        "firebaseConfig tells Firebase which project to connect with.",
        "initializeApp creates the Firebase connection.",
        "The app object is used to initialize Firebase services."
      ]
    },

    {
      "type": "heading",
      "text": "What is Firestore?"
    },

    {
      "type": "paragraph",
      "text": "Firestore is a NoSQL cloud database provided by Firebase. It stores data in collections and documents instead of tables and rows."
    },

    {
      "type": "heading",
      "text": "Firestore Data Structure"
    },

    {
      "type": "code",
      "language": "text",
      "text": "Database\n |\n Collection\n |\n Document\n |\n Fields"
    },

    {
      "type": "heading",
      "text": "What is Collection?"
    },

    {
      "type": "paragraph",
      "text": "A collection is a group of related documents. For example, all users can be stored inside a users collection."
    },

    {
      "type": "code",
      "language": "text",
      "text": "users\n |\n |-- user1\n |-- user2\n |-- user3"
    },

    {
      "type": "heading",
      "text": "What is Document?"
    },

    {
      "type": "paragraph",
      "text": "A document is a single record inside a collection. It contains fields that store actual data."
    },

    {
      "type": "code",
      "language": "text",
      "text": "users\n |\n user1\n   |\n   name: Rahul\n   age: 20"
    },

    {
      "type": "heading",
      "text": "Connecting Firestore With App"
    },

    {
      "type": "code",
      "language": "javascript",
      "text": "import { getFirestore } from 'firebase/firestore';\n\nconst db = getFirestore(app);"
    },

    {
      "type": "paragraph",
      "text": "getFirestore() creates a Firestore database instance. The db variable is the connection through which we perform database operations."
    },

    {
      "type": "heading",
      "text": "Create Data Using addDoc()"
    },

    {
      "type": "paragraph",
      "text": "addDoc() is used to create a new document inside a collection. Firestore automatically generates a unique document ID."
    },

    {
      "type": "code",
      "language": "javascript",
      "text": "import { collection, addDoc } from 'firebase/firestore';\n\nawait addDoc(\n collection(db,'users'),\n {\n  name:'Rahul',\n  age:20\n }\n);"
    },

    {
      "type": "heading",
      "text": "How addDoc Works?"
    },

    {
      "type": "summary",
      "items": [
        "collection() selects the collection where data should be stored.",
        "addDoc() creates a new document.",
        "Firestore automatically generates document ID."
      ]
    },

    {
  "type": "heading",
  "text": "Create Data Using setDoc()"
},
{
  "type": "paragraph",
  "text": "setDoc() creates a document with a custom document ID. If the document already exists, Firestore replaces its data."
},
{
  "type": "code",
  "language": "javascript",
  "text": "import { doc, setDoc } from 'firebase/firestore';\n\nawait setDoc(\n doc(db,'users','101'),\n {\n  name:'Rahul',\n  age:20\n }\n);"
},
{
  "type": "summary",
  "items": [
    "You provide the document ID.",
    "Creates a new document if it doesn't exist.",
    "Replaces the existing document if it already exists."
  ]
},

    {
      "type": "heading",
      "text": "Read Data Using getDocs()"
    },

    {
      "type": "paragraph",
      "text": "getDocs() retrieves multiple documents from a collection. It returns a QuerySnapshot containing all documents."
    },

    {
      "type": "code",
      "language": "javascript",
      "text": "import { collection, getDocs } from 'firebase/firestore';\n\nconst snapshot = await getDocs(\n collection(db,'users')\n);\n\nsnapshot.forEach((doc)=>{\n console.log(doc.data());\n});"
    },

    {
  "type": "heading",
  "text": "Read Single Document Using getDoc()"
},
{
  "type": "paragraph",
  "text": "getDoc() reads only one document using its document ID."
},
{
  "type": "code",
  "language": "javascript",
  "text": "import { doc, getDoc } from 'firebase/firestore';\n\nconst userRef = doc(db,'users','101');\nconst snapshot = await getDoc(userRef);\n\nconsole.log(snapshot.data());"
},
{
  "type": "summary",
  "items": [
    "doc() creates the document reference.",
    "getDoc() returns a single document.",
    "Use getDocs() when reading multiple documents."
  ]
},

{
  "type": "heading",
  "text": "Update Data Using updateDoc()"
},
{
  "type": "paragraph",
  "text": "updateDoc() updates only the specified fields without replacing the entire document."
},
{
  "type": "code",
  "language": "javascript",
  "text": "import { doc, updateDoc } from 'firebase/firestore';\n\nawait updateDoc(\n doc(db,'users','101'),\n {\n  age:21\n }\n);"
},
{
  "type": "summary",
  "items": [
    "Updates only selected fields.",
    "Other fields remain unchanged.",
    "Document must already exist."
  ]
},

{
  "type": "heading",
  "text": "Delete Data Using deleteDoc()"
},
{
  "type": "paragraph",
  "text": "deleteDoc() permanently removes a document from Firestore."
},
{
  "type": "code",
  "language": "javascript",
  "text": "import { doc, deleteDoc } from 'firebase/firestore';\n\nawait deleteDoc(\n doc(db,'users','101')\n);"
},
{
  "type": "summary",
  "items": [
    "Deletes the document permanently.",
    "The document ID is removed from the collection.",
    "Deleted data cannot be recovered."
  ]
},

    {
  "type": "heading",
  "text": "CRUD Operations Summary"
},
{
  "type": "summary",
  "items": [
    "addDoc() → Create document with auto-generated ID.",
    "setDoc() → Create or replace document with custom ID.",
    "getDocs() → Read all documents from a collection.",
    "getDoc() → Read a single document.",
    "updateDoc() → Update specific fields.",
    "deleteDoc() → Delete a document permanently."
  ]
}

  ]
}
]