import React, { CSSProperties } from 'react';
import { Link, generatePath } from 'react-router-dom';

import schema, { Pages } from './schema';

interface ILinkProps {
  to: Pages;
  params?: {
    id?: string;
    orderNumber?: string;
    tabName?: string;
    slug?: string;
  };
  className?: string;
  onClick?: () => void;
  query?: string;
  children?: any;
  style?: CSSProperties;
  backFlag?: boolean;
  popHistory: () => void;
  additionalParameter?: string;
}

export const InternalLink: React.FC<ILinkProps> = ({
  to,
  params,
  children,
  className,
  onClick,
  query,
  style,
  popHistory,
  additionalParameter,
  backFlag,
}) => {
  let id, slug, orderNumber, tabName;

  if (params) {
    id = params.id;
    slug = params.slug;
    orderNumber = params.orderNumber;
    tabName = params.tabName;
  }

  let link: string =
    id || orderNumber || slug
      ? generatePath(schema.getLink(to), {
          id,
          orderNumber,
          slug,
          tabName,
        })
      : schema.getLink(to) || '/error';

  if (query) {
    link = link + '?' + query;
  }

  const onClickFunction: () => void = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
    if (backFlag) {
      popHistory();
    }
  };

  return (
    <Link
      to={link}
      className={className || ''}
      onClick={onClickFunction}
      style={style}>
      {children}
    </Link>
  );
};

export default InternalLink