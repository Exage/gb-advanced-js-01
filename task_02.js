const cooks = new Map()

cooks.set('Пицца', 'Виктор')
cooks.set('Суши', 'Ольга')
cooks.set('Дессерты', 'Дмитрий')

const menu = new Map()

menu.set('Маргарита', { category: "Пицца" })
menu.set('Пепперони', { category: "Пицца" })
menu.set('Филадельфия', { category: "Суши" })
menu.set('Калифорния', { category: "Суши" })
menu.set('Тирамису', { category: "Дессерты" })
menu.set('Чизкейк', { category: "Дессерты" })

const orders = new Map()

orders.set({ clientName: "Алексей" }, ["Пепперони", "Тирамису"])
orders.set({ clientName: "Мария" }, ["Калифорния", "Маргарита"])
orders.set({ clientName: "Иван" }, ["Калифорния", "Маргарита", "Пепперони", "Тирамису"])
orders.set({ clientName: "Руслан" }, ["Маргарита", "Пепперони", "Филадельфия", "Калифорния", "Тирамису", "Чизкейк"])
orders.set({ clientName: "Ирина" }, ["Чизкейк"])

for (let [client, order] of orders) {
    const cooksArr = []
    const orderStr = order.map(item => {
        const { category } = menu.get(item)
        const whoCook = cooks.get(category)
        cooksArr.push(whoCook)
        return item
    }).join(', ').replace(/, ([^,]*)$/, ' и $1')

    const uniqueCooks = [...new Set(cooksArr)]

    console.log(`Клиент ${client.clientName} заказал: ${orderStr};\nПриготовит: ${uniqueCooks.join(', ')}`)
}