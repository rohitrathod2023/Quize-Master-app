export const dbName = 'QuizDB';
export const storeName = 'quizHistory';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    };
  });
};

export const saveQuizResult = async (result) => {
    const db = await initDB();
  
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
  
     
      const request = store.add({
        ...result,
        timestamp: new Date().toISOString(),
      });
  
      request.onsuccess = async () => {
        const allResults = await getQuizHistory(); 
  
        
        if (allResults.length > 10) {
          const oldestId = allResults[0].id; 
          const deleteTransaction = db.transaction([storeName], "readwrite");
          const deleteStore = deleteTransaction.objectStore(storeName);
          deleteStore.delete(oldestId);
        }
  
        resolve(request.result);
      };
  
      request.onerror = () => reject(request.error);
    });
  };
  
export const getQuizHistory = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};