/**
 * iframe: 800
 */
import { AwarenessEditor, ComponentAsset, ProEditor } from '@/index';
import { JsonViewer } from '@textea/json-viewer';
import { useLocalStorageState } from 'ahooks';
import { Flexbox } from 'react-layout-kit';

import { demoAssets } from '@/ComponentAsset/demoAssets';

const assets = new ComponentAsset(demoAssets);

export default () => {
  const [presence, setPresence] = useLocalStorageState<AwarenessEditor>('DEMO-PRO-EDITOR');

  return (
    <Flexbox>
      <ProEditor
        componentAsset={assets}
        editorAwareness={presence}
        onEditorAwarenessChange={setPresence}
        style={{ height: 'calc(100vh - 100px)' }}
      />
      <Flexbox>
        当前视图状态：
        <JsonViewer value={presence} />
      </Flexbox>
    </Flexbox>
  );
};
