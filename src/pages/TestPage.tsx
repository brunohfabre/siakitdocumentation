import { PageHeader } from '../components/PageHeader';
import { Text } from '../components/Text';

export function TestPage(): JSX.Element {
  return (
    <PageHeader onGoBack={() => console.log('go back')} title="Page title">
      <Text>page header rest</Text>
    </PageHeader>
  );
}
