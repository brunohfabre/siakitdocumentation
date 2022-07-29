import { PageBuilder } from '../components/PageBuilder';
import { api } from '../services/api';

const pageBuilderConfig = {
  id: 'dad5d3ea-ba02-431e-b9bc-b47dea7d77a1',
  label: 'Teste de config para page builder',
  slug: 'teste-de-config-para-page-builder',
  actions: [
    {
      label: 'Novo item',
      href: 'create',
    },
  ],
  filter: {
    hasSearch: true,
    fields: [
      { dataIndex: 'name', label: 'Nome', type: 'text' },
      {
        dataIndex: 'nationality',
        label: 'Nascionalidade',
        type: 'select',
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
        ],
      },
      {
        dataIndex: 'test',
        label: 'Teste',
        type: 'select',
        href: 'http://localhost:5555/test',
      },
      { dataIndex: 'age', label: 'Idade', type: 'number' },
      {
        dataIndex: 'cpf',
        label: 'CPF',
        type: 'mask',
        mask: 'cpf',
        parent: 'nationality',
      },
      { dataIndex: 'salary', label: 'Salario', type: 'money' },
      { dataIndex: 'phone', label: 'Celular', type: 'phone' },
      {
        dataIndex: 'waterInBody',
        label: '% agua no corpo',
        type: 'percentage',
      },
      { dataIndex: 'rich', label: 'Já ficou rico?', type: 'switch' },
      { dataIndex: 'dateBirth', label: 'Data de nascimento', type: 'date' },
    ],
  },
  list: {
    href: 'https://jsonplaceholder.typicode.com/posts',
    usePagination: true,
    defaultSort: { dataIndex: 'body', direction: 'ASC' },
    fields: [
      {
        label: 'User ID',
        dataIndex: 'userId',
        type: 'text',
      },
      {
        label: 'Titulo',
        dataIndex: 'title',
        type: 'text',
      },
      {
        label: 'Corpo',
        dataIndex: 'body',
        type: 'text',
        sort: 'SO.body',
      },
    ],
    footer: {
      userId: 20,
      body: 'body total',
    },
    actions: [
      {
        label: 'Editar',
        action: {
          type: 'redirect',
          href: '[id]/update',
        },
      },
    ],
  },
  exports: [
    { label: 'CSV', href: 'https://google.com' },
    { label: 'PDF', href: 'https://zustand-demo.pmnd.rs/' },
  ],
};

export function TestPage(): JSX.Element {
  return (
    <PageBuilder
      config={pageBuilderConfig}
      agent={api}
      onNavigate={(route) => console.log(route)}
    />
  );
}
