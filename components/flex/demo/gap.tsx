import React from 'react';
import { Button, Flex, Radio, Slider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

const App: React.FC = () => {
  const [gapSize, setGapSize] = React.useState<SizeType | 'customize'>('small');
  const [customGapSize, setCustomGapSize] = React.useState<number>(0);

  return (
    <>
      <Radio.Group value={gapSize} onChange={(e) => setGapSize(e.target.value)}>
        {['small', 'middle', 'large', 'customize'].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      <br />
      <br />
      {gapSize === 'customize' && (
        <>
          <Slider value={customGapSize} onChange={setCustomGapSize} />
          <br />
        </>
      )}
      <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Flex>
    </>
  );
};

export default App;
