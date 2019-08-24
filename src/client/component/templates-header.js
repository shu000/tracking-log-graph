import React from 'react';

export default class TemplatesHeader extends React.Component {
  render() {
    return (
      <>
        <button onClick={ e => {
          this.props.onSelectCustomer('初期設定');
        }}>取得テスト！</button>
    		<ul className="template-ul, template-labels, container">
    			<li className="template-li">
    				<label>ディレクトリ</label>
    			</li>
    			<li className="template-li">
    				<label>完全一致</label>
    			</li>
    			<li className="template-li">
    				<label>前方一致</label>
    			</li>
    			<li className="template-li">
    				<label>部分一致</label>
    			</li>
    			<li className="template-li">
    				<label>ページタイトル</label>
    			</li>
    			<li className="template-li">
    				<label>略称</label>
    			</li>
    			<li className="template-li">
    				<label>色</label>
    			</li>
    		</ul>
      </>
    );
  }
}
