import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit,faInfo } from '@fortawesome/free-solid-svg-icons'
import { Popconfirm, message, Button } from 'antd';
import { HistoryOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import dateFormat from 'dateformat'
import money from '../../../Share/functions/money';

const DataTable = ({ dataSource, loading, info, deleteAccessory }) => {

  const onSubmit = (values) => {
    info(values)
  }

  const onDelete = (values) => {
    deleteAccessory(values)
  }

  const columns = [
    {
      title: '#',
      width: 50,
      className: 'text-center',
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Tên người dùng',
      dataIndex: ['userInfo', 'name'],
      key: 'name',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Giá xe',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {money(value,'VNĐ')|| ''} VNĐ</span>
        </div>
    },
    {
      title: 'Tiền đặt cọc',
      dataIndex: 'deposit',
      key: 'deposit',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {money(value,'VNĐ') || ''} </span>
        </div>
    },
    {
      title: 'Thời gian hẹn',
      dataIndex: 'time',
      key: 'time',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {dateFormat(value,'HH:MM dddd, mmmm d, yyyy') || ''} </span>
        </div>
    },
    {
      title: 'Địa điểm nhận xe',
      dataIndex: ['place','address'],
      key: 'price',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>{
          (value === 'Pending') ?
            <span style={{ color: 'blue' }}><HistoryOutlined />   {'Đang chờ' || ''} </span> :
            (value === 'Success') ?
              <span style={{ color: 'green' }}><CheckOutlined /> {"Đã nhận" || ''} </span> :
              <span style={{ color: 'red' }}><CloseOutlined /> {value || ''} </span>
        }
        </div>
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space>
          <button onClick={() => onSubmit(record)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Thông tin xe">
              <span className="px-2">
                <FontAwesomeIcon icon={faInfo} />
              </span>
            </Tooltip>
          </button>
          <Popconfirm disabled={(record.status==='Success')} placement="left" title='Bạn có muốn hủy?' onConfirm={() => onDelete(record?._id)} okText="Có" cancelText="Không">
            <button
              // onClick={() => onDelete(record?._id)} 
              className="btn btn-sm btn-primary"
              >
              <Tooltip placement="top" tilte="Xóa">
                <span className="px-2">
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </span>
              </Tooltip>
            </button>
          </Popconfirm>
        </Space>
      ),
    },]
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
}

export default DataTable;
