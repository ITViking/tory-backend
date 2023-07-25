

export const itemsDb = {
    db: [],
    add: (item: {id: number, name: string }) => itemsDb.db.push(item),
    list: () => itemsDb.db
}