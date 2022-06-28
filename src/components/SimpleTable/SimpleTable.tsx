import React from 'react';

import { Grid } from '../Grid';

type SimpleTableProps = {
  children: any;
};

export function SimpleTable({ children }: SimpleTableProps): JSX.Element {
  return (
    <Grid columns={children[0]?.props.children.length ?? 0}>
      {children[0]?.props.children}

      {children[1]?.props.children}

      {/* {header.map((item) => (
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
      ))} */}
    </Grid>
  );
}
