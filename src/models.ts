

export const itemsDb = {
    db: [],
    add: (item: {id: string, name: string }) => itemsDb.db.push(item),
    list: () => itemsDb.db
}

export const containersDb = {
    db: [],
    add: (id: string, name: string) => containersDb.db.push({ id, name }),
    list: () => containersDb.db
}