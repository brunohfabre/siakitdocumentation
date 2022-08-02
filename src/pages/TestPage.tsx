import { Route, Routes, useNavigate } from 'react-router-dom';

import { PageBuilderPage } from '../components/PageBuilder';
import { PageBuilderForm } from '../components/PageBuilder/PageBuilderForm';
import { api } from '../services/api';

const pageBuilderConfig = {
  id: 'dad5d3ea-ba02-431e-b9bc-b47dea7d77a1',
  label: 'Teste de config para page builder',
  slug: 'teste-de-config-para-page-builder',
  actions: [
    {
      label: 'Novo item',
      url: 'create',
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
        url: 'http://localhost:5555/test/[nationality]',
        parent: 'nationality',
      },
      { dataIndex: 'age', label: 'Idade', type: 'number' },
      {
        dataIndex: 'cpf',
        label: 'CPF',
        type: 'mask',
        mask: 'cpf',
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
    url: 'https://jsonplaceholder.typicode.com/posts',
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
          url: '[id]/update',
        },
      },
    ],
  },
  exports: [
    { label: 'CSV', url: 'https://google.com' },
    { label: 'PDF', url: 'https://zustand-demo.pmnd.rs/' },
  ],
  form: {
    actions: [
      {
        label: 'Cadastrar',
        type: 'submit',
        route: {
          method: 'post',
          url: 'http://localhost:5555/test',
        },
      },
    ],
    fields: [
      {
        name: 'name',
        label: 'Nome',
        type: 'text',
        readOnly: 'never',
        required: true,
      },
      {
        name: 'nationality',
        label: 'Nascionalidade',
        type: 'select',
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
        ],
        readOnly: 'never',
      },
      {
        name: 'test',
        label: 'Teste',
        type: 'select',
        url: 'http://localhost:5555/test/[nationality]',
        parent: 'nationality',
        readOnly: 'never',
      },
      { name: 'age', label: 'Idade', type: 'number', readOnly: 'never' },
      {
        name: 'cpf',
        label: 'CPF',
        type: 'mask',
        mask: 'cpf',
        readOnly: 'never',
        verification: {
          method: 'get',
          url: 'http://localhost:5555/verification/[cpf]',
        },
      },
      {
        name: 'salary',
        label: 'Salario',
        type: 'money',
        readOnly: 'ifnotnull',
      },
      { name: 'phone', label: 'Celular', type: 'phone', readOnly: 'ifnotnull' },
      {
        name: 'waterInBody',
        label: '% agua no corpo',
        type: 'percentage',
        readOnly: 'ifnotnull',
      },
      {
        name: 'rich',
        label: 'Já ficou rico?',
        type: 'switch',
        readOnly: 'never',
      },
      {
        name: 'dateBirth',
        label: 'Data de nascimento',
        type: 'date',
        readOnly: 'always',
      },
    ],
  },
} as any;

export function TestPage(): JSX.Element {
  const navigate = useNavigate();

  function handleNavigate(route: string | number): void {
    navigate(String(route));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageBuilderPage
            config={pageBuilderConfig}
            agent={api}
            onNavigate={handleNavigate}
          />
        }
      />
      <Route
        path="/create"
        element={
          <PageBuilderForm
            config={pageBuilderConfig}
            agent={api}
            onSubmit={(route) => navigate(route || '/test', { replace: true })}
          />
        }
      />
    </Routes>
  );
}
