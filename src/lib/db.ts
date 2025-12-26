export type StoreName = 'sessions' | 'exercises'

const DB_NAME = 'AppDatabase'
const DB_VERSION = 1
const DB_SCHEMA: Record<StoreName, { name: string }> = {
  sessions: { name: 'sessions' },
  exercises: { name: 'exercises' },
}

class LocalDBStore {
  private db: LocalDB
  private storeName: StoreName

  constructor(db: LocalDB, storeName: StoreName) {
    this.db = db
    this.storeName = storeName
  }

  save<T>(key: string, data: T): Promise<void> {
    return this.db.execute<void>(this.storeName, 'readwrite', (store) => {
      store.put(data, key)
    })
  }

  getAll<T>(): Promise<T[]> {
    return this.db.execute<T[]>(this.storeName, 'readonly', (store) => {
      return store.getAll()
    })
  }

  getOne<T>(key: string): Promise<T | undefined> {
    return this.db.execute<T | undefined>(this.storeName, 'readonly', (store) => {
      return store.get(key)
    })
  }

  remove(key: string): Promise<void> {
    return this.db.execute<void>(this.storeName, 'readwrite', (store) => {
      store.delete(key)
    })
  }
}

class LocalDB {
  private db?: IDBDatabase
  private connectionPromise?: Promise<IDBDatabase> // This is a promise that resolves when the database connection is established.
  private stores: Map<StoreName, LocalDBStore> = new Map()

  constructor() {
    Object.keys(DB_SCHEMA).forEach((storeName) => {
      this.stores.set(storeName as StoreName, new LocalDBStore(this, storeName as StoreName))
    })
  }

  store(name: StoreName): LocalDBStore {
    return this.stores.get(name)!
  }

  async execute<T>(
    storeName: StoreName,
    mode: IDBTransactionMode,
    callback: (store: IDBObjectStore) => IDBRequest | void,
  ): Promise<T> {
    const db = await this.getDB()
    return new Promise<T>((resolve, reject) => {
      const t = db.transaction(storeName, mode)
      const store = t.objectStore(storeName)

      let request
      try {
        request = callback(store)
      } catch (e) {
        reject(e)
        return
      }

      t.oncomplete = () => resolve(request?.result)
      t.onerror = () => reject(t.error)
    })
  }

  private getDB(): Promise<IDBDatabase> {
    if (this.db) return Promise.resolve(this.db)
    if (this.connectionPromise) return this.connectionPromise // This ensures that only one connection attempt is made at a time.

    this.connectionPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION)

      // Create object stores based on DB_SCHEMA
      request.onupgradeneeded = () => {
        const db = request.result

        for (const store of Object.values(DB_SCHEMA)) {
          if (!db.objectStoreNames.contains(store.name)) {
            db.createObjectStore(store.name)
          }
        }
      }

      request.onsuccess = () => {
        this.connectionPromise = undefined
        this.db = request.result
        resolve(this.db)
      }

      request.onerror = () => {
        this.connectionPromise = undefined
        reject(request.error)
      }
    })

    return this.connectionPromise
  }
}

const localDB = new LocalDB()

export default localDB
