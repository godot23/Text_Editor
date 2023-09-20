
import { openDB } from 'idb';


const initdb = async () =>

  openDB('demo-db', 1, {

    upgrade(db) {
      if (db.objectStoreNames.contains('demo-db')) {
        console.log('demo-db database already exists');
        return;
      }


      db.createObjectStore('demo-db', { keyPath: 'id', autoIncrement: true });
      console.log('demo-db database created');
    },
  });

initdb();