import * as React from 'react';
import { Checkbox, CheckboxProps } from '../src';
import { Grid } from '@manifest-ui/layout';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: CheckboxProps) => <Checkbox {...args} />;
Default.args = {
  children: 'Checkbox',
};

export const Indeterminate = () => {
  const [checked, setChecked] = React.useState([false, false]);

  const isAllChecked = checked.every(Boolean);
  const isIndeterminate = checked.some(Boolean) && !isAllChecked;

  return (
    <>
      <Checkbox
        isChecked={isAllChecked}
        isIndeterminate={isIndeterminate}
        onChange={e => setChecked([e.target.checked, e.target.checked])}
      >
        Indeterminate
      </Checkbox>
      <Grid columns={['1fr']} sx={{ ml: 2, mt: 2 }}>
        <Checkbox isChecked={checked[0]} onChange={e => setChecked([e.target.checked, checked[1]])}>
          Checkbox
        </Checkbox>
        <Checkbox isChecked={checked[1]} onChange={e => setChecked([checked[0], e.target.checked])}>
          Checkbox
        </Checkbox>
      </Grid>
    </>
  );
};
