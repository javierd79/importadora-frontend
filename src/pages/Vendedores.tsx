
import React from 'react';
import { Table } from '@mantine/core';

const vendedores = [
  { nombre: 'Juan Pérez', cedula: '28987654', telefono: '+58 414-111111', correo: 'juan.perez@gmail.com', faltas: 2 },
  { nombre: 'María López', cedula: '28987654', telefono:  '+58 414-111111', correo: 'maria.lopez@gmail.com', faltas: 0 },
  { nombre: 'Carlos García', cedula: '28987654', telefono:  '+58 414-111111', correo: 'carlos.garcia@gmail.com', faltas: 1 },
];

function Vendedores() {
  const rows = vendedores.map((vendedor) => (
    <tr key={vendedor.cedula}>
      <td>{vendedor.nombre}</td>
      <td>{vendedor.cedula}</td>
      <td>{vendedor.telefono}</td>
      <td>{vendedor.correo}</td>
      <td>{vendedor.faltas}</td>
    </tr>
  ));

  return (
    <Table striped withColumnBorders horizontalSpacing="sm" verticalSpacing="sm" fontSize="md">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cédula</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Faltas</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default Vendedores;
