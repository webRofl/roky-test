import { Button, Form, Input, Select } from 'antd';
import Image from 'next/image';
import s from './style.module.css';

const selectOptionsSort = [
  { value: 'newest', label: 'sort by newest' },
  { value: 'oldest', label: 'sort by oldest' },
  { value: 'relevance', label: 'sort by relevance' },
];

const selectOptionsPageSize = [
  { value: '20', label: '20' },
  { value: '40', label: '40' },
  { value: '60', label: '60' },
];

const initialValues = {
  search: '',
  sortSelect: 'newest',
  pageSizeSelect: '20'
};

const SearchForm = () => {
  const onFinish = (values: Record<string, string>) => {
    console.log('FINISH', values);
  };

  return <Form className={s.container} onFinish={onFinish} initialValues={initialValues}>
    <div className={s.inputBlock}>
      <Form.Item name='search' className={s.search}>
        <Input placeholder='Поиск' size='large' prefix={<Image src='/search.svg' alt='search icon' width={25} height={25} />} />
      </Form.Item>
      <Form.Item>
        <Button className={s.submitBtn} htmlType='submit' size='large'>Find</Button>
      </Form.Item>
    </div>
    <div className={s.filterBlock}>
      <Form.Item className={s.sortSelect} name='sortSelect'>
        <Select defaultValue='newest' options={selectOptionsSort} />
      </Form.Item>
      <Form.Item className={s.pageSizeSelect} name='pageSizeSelect' label='items on page'>
        <Select defaultValue='20' options={selectOptionsPageSize} />
      </Form.Item>
    </div>
  </Form>
}
 
export default SearchForm;