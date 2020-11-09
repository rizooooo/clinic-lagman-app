import PouchDB from 'pouchdb'

const localDB = new PouchDB('patients');
const remoteDb = new PouchDB('http://34.215.127.221:5984/patients', {
    auth:
    {
        username: 'admin',
        password: 123123
    },
})

// const activeDb = null;

console.log(remoteDb, 'REMOTE DB')
console.log(localDB, 'DB')
const dbSync = localDB.sync(remoteDb, { live: true });

dbSync.on('complete', () => {
    console.log('DB SYNCED!')
});

dbSync.on('error', err => {
    console.log('Error: ', err)
});

dbSync.on('paused', err => {
    console.log('Paused: ', err)
});



const PatientDB = {
    db_info: async () => {
        return await localDB.info();
    },
    ADD_PATIENT: async (patient) => {
        return await localDB.put({ ...patient, _id: new Date().getTime().toString() });
    },
    GET_PATIENTS: async () => {
        return localDB.allDocs({
            include_docs: true,
            attachments: true,
        })
    },
    SUBSCRIBE: (func) => {
        return dbSync.on('change', func);
    }
}


export default PatientDB;