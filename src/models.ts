

export const itemsDb = {
    db: [],
    add: (item: string) => itemsDb.db.push(item),
    list: () => itemsDb.db
}