import * as React from "react";

interface BlockBarProps {
  name: string,
  value: number | undefined,
}

function BlockBar({name, value}: BlockBarProps) {
  if (value === undefined) {
    return null;
  }

  let contents = [];
  for (let i = 15; i > 0; i--) {
    if (i <= value) {
      contents.push(<div key={i} className={'block filled'} data-testid={'filled'} />);
    } else {
      contents.push(<div key={i} className={'block empty'} data-testid={'empty'} />);
    }
  }

  return (
    <div className={'bar-graph'}>
      {contents}
      <div className={'label'}>{name}</div>
    </div>
  );
}

export default BlockBar;
