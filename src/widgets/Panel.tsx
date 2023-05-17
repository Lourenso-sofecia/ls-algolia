import { RefinementList } from "react-instantsearch-hooks-web";

import { useNumericMenu } from 'react-instantsearch-hooks-web';

export function Panel({
  children,
  header,
  footer,
}: React.PropsWithChildren<{
  header?: React.ReactNode;
  footer?: React.ReactNode;
}>) {

  //const { items, refine } = useNumericMenu(props);
  return (
    <div className="ais-Panel">
      {header && <div className="ais-Panel-header">{header}</div>}
      <div className="ais-Panel-body">{children}</div>
      <div className="ais-Panel-header">Brands. Search Here...</div>
      <RefinementList attribute="brand" />
      {footer && <div className="ais-Panel-footer">{footer}</div>}
    </div>
  );
}
