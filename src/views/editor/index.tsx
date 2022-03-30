import './index.less';
import Layout from '@/components/Layout';
import Editor from 'for-editor';
import { useState } from 'react';
import { Button, Breadcrumb } from 'antd';
import { editorToolbar } from '@/constant';

export default function EditorPage() {
  const defaultMdText = '## Hello Word!';
  const isPreMdText = defaultMdText;

  const [mdText, updMdText] = useState(defaultMdText);
  const [saveLoading, updSaveLoading] = useState(false);

  const routeBackHandle = () => {
    if (isPreMdText !== mdText) {
      console.log('ask upd');
    }
    history.back();
  };

  const saveHandle = async () => {
    console.log('save');
    updSaveLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    updSaveLoading(false);
    console.log('success');
  };

  return (
    <Layout full>
      <div className="editor-page">
        <div className="editor-header">
          <Breadcrumb>
            <Breadcrumb.Item>
              <span style={{ cursor: 'pointer' }} onClick={routeBackHandle}>
                <span>返回</span>
              </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>editing...</Breadcrumb.Item>
          </Breadcrumb>
          <div className="editor-header-tools">
            <Button onClick={routeBackHandle}>
              <span>取消</span>
            </Button>
            <Button type="primary" loading={saveLoading} style={{ marginLeft: '10px' }} onClick={saveHandle}>
              <span>保存</span>
            </Button>
          </div>
        </div>
        <div className="md-editor">
          <Editor
            value={mdText}
            preview
            subfield
            height="100%"
            toolbar={editorToolbar}
            onChange={(text: string) => updMdText(text)}
          />
        </div>
      </div>
    </Layout>
  );
}
