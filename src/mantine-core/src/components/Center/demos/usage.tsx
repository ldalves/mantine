import React from 'react';
import { Center } from '../Center';
import { useMantineTheme } from '../../../theme';

const code = `
<Center style={{ width: 400, height: 200 }}>
  <div>All elements inside Center are centered</div>
</Center>
`;

function Demo() {
  const theme = useMantineTheme();
  return (
    <Center
      style={{
        margin: 'auto',
        maxWidth: 400,
        height: 200,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
      }}
    >
      <div>All elements inside Center are centered</div>
    </Center>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};