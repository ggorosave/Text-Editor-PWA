import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
 
  console.log('PUT to the database');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');
  
  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log('Data updated!', result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  
  console.log('GET from the database');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  // Use get route with argument of 1 because we are updating a reloading the same property
  const request = store.get(1);

  const result = await request;

  console.log('Data: ', result);
  return result?.value;
};

initdb();
