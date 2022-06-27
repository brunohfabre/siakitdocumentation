import React, { ReactElement } from 'react';

import { Grid } from '../Grid';
import { Text } from '../Text';
import { Item } from './styles';

type Header = {
  title: string;
  dataIndex: string;
};

type Item = { [key: string]: string | ReactElement };

type SimpleTableProps = {
  header: Header[];
  data: Item[];
};

export function SimpleTable({ header, data }: SimpleTableProps): JSX.Element {
  return (
    <Grid columns={header.length}>
      {header.map((item) => (
        <Item>
          <Text size="sm" lowContrast>
            {item.title}
          </Text>
        </Item>
      ))}

      {data.map((item) => (
        <>
          {header.map((headerItem) => (
            <Item>
              <Text size="sm">{item[headerItem.dataIndex]}</Text>
            </Item>
          ))}
        </>
      ))}
    </Grid>
  );
}
