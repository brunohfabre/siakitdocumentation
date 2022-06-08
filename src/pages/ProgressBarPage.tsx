import { useState } from 'react';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { ProgressBar } from '../components/ProgressBar';

export function ProgressBarPage(): JSX.Element {
  const [progress, setProgress] = useState(0);

  return (
    <Flex flex justify="center" align="center" direction="column" gap={64}>
      <Flex gap={8}>
        <Button type="button" onClick={() => setProgress(0)}>
          to 0%
        </Button>
        <Button type="button" onClick={() => setProgress(25)}>
          to 25%
        </Button>
        <Button type="button" onClick={() => setProgress(50)}>
          to 50%
        </Button>
        <Button type="button" onClick={() => setProgress(75)}>
          to 75%
        </Button>
        <Button type="button" onClick={() => setProgress(100)}>
          to 100%
        </Button>
      </Flex>

      <Flex width={440} direction="column" gap>
        <ProgressBar progress={progress} />
        <ProgressBar progress={progress} showPercentage />
      </Flex>
    </Flex>
  );
}
