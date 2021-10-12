import React from 'react';

export const ValidComponent = (Component) => {
  if (!Component) {
    return undefined;
  }

  const element = React.isValidElement(Component) ? (
    Component
  ) : (
    <Component />
  );

  return element;
};

export function keyExtractor(item, index) {
  if (typeof item === 'object' && item?.key != null) {
    return item.key;
  }
  if (typeof item === 'object' && item?.id != null) {
    return item.id;
  }
  return String(index);
}
