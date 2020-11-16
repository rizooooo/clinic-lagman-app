import PouchDB from 'pouchdb'

const localDB = new PouchDB('patients');
const remoteDb = new PouchDB('https://prodapi.wcvi.net/patients', {
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
    UPDATE_PATIENT: async (patient) => {
        return await localDB.put({ ...patient, _rev: patient._rev });
    },
    GET_PATIENTS: async () => {
        return await localDB.allDocs({
            include_docs: true,
            attachments: true,
        })
    },
    FIND_PATINET: async (id) => {
        return await localDB.get(id);
    },
    SUBSCRIBE: (func) => {
        return dbSync.on('change', func);
    }
}


export default PatientDB;