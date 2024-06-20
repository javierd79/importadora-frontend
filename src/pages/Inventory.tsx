import StatsCard from "@components/StatsCard"
import { Group, Table, Text } from "@mantine/core"
import { IconCategory, IconMoneybag, IconStars } from "@tabler/icons-react"

interface ITableData {
  item: string;
  quantity: number;
  price: number;
  isTopSeller: boolean;
}

const categoryData = [
  {
    name: 'ITEMS POR CATEGORIA',
    value: 100,
    color: 'teal',
    icon: <IconCategory size="1.5em" />
  },
  {
    name: 'ITEMS TOTALES',
    value: 1843,
    color: 'blue',
    icon: <IconStars size="1.5em" />
  },
  {
    name: 'ITEM VENDIDOS',
    value: 15489,
    color: 'red',
    icon: <IconMoneybag size="1.5em" />
  }
]

const tableData = [
  {
    item: 'Atún',
    quantity: 100,
    price: 6.00,
    isTopSeller: true
  },
  {
    item: 'Salmón',
    quantity: 200,
    price: 10.00,
    isTopSeller: false
  },
  {
    item: 'Curvina',
    quantity: 150,
    price: 6.00,
    isTopSeller: true
  },
  {
    item: 'Tiburón',
    quantity: 300,
    price: 10.00,
    isTopSeller: false
  },
] satisfies ITableData[]

// Then use sortedTableData in your component
function Inventory() {
  return (
    <>
      <Group position="center" grow>
        {categoryData.map((data, index) => (
          <StatsCard
            key={index}
            title={data.name}
            value={data.value}
            color={data.color}
            icon={data.icon}
          />
        ))}
      </Group>
      <Table striped withBorder withColumnBorders mt={10} highlightOnHover>
        <thead>
          <tr>
            <th>
              <Text ta="center" fw={700} fz={17}>
                Item
              </Text>
            </th>
            <th>
              <Text ta="center" fw={700} fz={17}>
                Cantidad
              </Text>
            </th>
            <th>
              <Text ta="center" fw={700} fz={17}>
                Precio unitario
              </Text>
            </th>
            <th>
              <Text ta="center" fw={700} fz={17}>
                Más Vendido
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.sort((a, b) => Number(b.isTopSeller) - Number(a.isTopSeller)).map((data, index) => (
            <tr key={index}>
              <td>
                <Text fw={300} fz={17} ta="center">
                  {data.item}
                </Text>
              </td>
              <td>
                <Text fw={300} fz={17} ta="center">
                  {data.quantity}
                </Text>
              </td>
              <td>
                <Text fw={300} fz={17} ta="center">
                  {data.price}
                </Text>
              </td>
              <td>
                <Text fw={300} fz={17} ta="center">
                  {data.isTopSeller ? 'Si' : 'No'}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Inventory