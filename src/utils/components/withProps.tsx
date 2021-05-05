import { Children, cloneElement, DetailedReactHTMLElement, ReactNode } from 'react';

export default (children: ReactNode | ReactNode[], elementProps: any = {}) => {
  if (!children) return null;

  let elements: any = Children.toArray(children);

  if (elements === undefined || elements === null || elements.length === 0) return null;

  const element = elements[0];

  if (elements.length === 1) elements = element ? cloneElement(element, elementProps) : null;

  if (elements.length > 1)
    elements = elements.map((node: DetailedReactHTMLElement<any, any>) => cloneElement(node, elementProps));

  return elements;
};
