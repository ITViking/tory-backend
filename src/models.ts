

export const itemsDb = {
    db: [],
    add: (item: {id: string, name: string }) => itemsDb.db.push(item),
    list: () => itemsDb.db
}

export const containersDb = {
    db: [],
    add: (container: {id: string, name: string}) => containersDb.db.push(container),
    list: () => containersDb.db
}