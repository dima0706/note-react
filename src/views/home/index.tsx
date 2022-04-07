import './index.less';
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button, TreeSelect } from 'antd';
import { Link } from 'react-router-dom';

export default function Home() {
  const { TreeNode } = TreeSelect;

  const [value, setValue] = useState('');

  return (
    <Layout full>
      <div className="home-page">
        <div className="home-page-content">
          <div className="home-header">
            <div className="home-header-filter">
              <span>筛选：</span>
              <TreeSelect
                className="home-header-tree-select"
                showSearch
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={(val: string) => setValue(val)}
              >
                <TreeNode value="parent 1" title="parent 1">
                  <TreeNode value="parent 1-0" title="parent 1-0">
                    <TreeNode value="leaf1" title="leaf1" />
                    <TreeNode value="leaf2" title="leaf2" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1">
                    <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </div>
            <div className="home-header-create-btn">
              <Link to="/editor">
                <Button type="primary">去记录吧</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
