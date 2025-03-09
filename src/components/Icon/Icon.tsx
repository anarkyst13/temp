import React from 'react';

import { IconProps } from './types';

import { IconMap } from './IconMap';

const Icon: React.FC<IconProps> = ({ name, size, color = 'currentColor', className }) => {
  const IconComponent = IconMap[name];

  return (
    <IconComponent
      style={{
        width: size,
        height: size,
        fill: color,
      }}
      className={className}
    />
  );
};

export default Icon;
