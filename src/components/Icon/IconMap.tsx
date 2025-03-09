interface IconProps {
  fill?: string;
  [key: string]: any;
}

export const Feathericonlogin = ({ fill = 'currentColor', ...props }: IconProps) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 2C13.5 1.72386 13.7239 1.5 14 1.5H19C20.3807 1.5 21.5 2.61929 21.5 4V20C21.5 21.3807 20.3807 22.5 19 22.5H14C13.7239 22.5 13.5 22.2761 13.5 22C13.5 21.7239 13.7239 21.5 14 21.5H19C19.8284 21.5 20.5 20.8284 20.5 20V4C20.5 3.17157 19.8284 2.5 19 2.5H14C13.7239 2.5 13.5 2.27614 13.5 2Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      d="M10.6464 7.64645C10.8417 7.45118 11.1583 7.45118 11.3536 7.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L11.3536 16.3536C11.1583 16.5488 10.8417 16.5488 10.6464 16.3536C10.4512 16.1583 10.4512 15.8417 10.6464 15.6464L14.2929 12L10.6464 8.35355C10.4512 8.15829 10.4512 7.84171 10.6464 7.64645Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H15C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

export const Feathericonchevronright = ({ fill = 'currentColor', ...props }: IconProps) => (
  <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5273 7.52876C11.7876 7.26841 12.2098 7.26841 12.4701 7.52876L20.4701 15.5288C20.7305 15.7891 20.7305 16.2112 20.4701 16.4716L12.4701 24.4716C12.2098 24.7319 11.7876 24.7319 11.5273 24.4716C11.2669 24.2112 11.2669 23.7891 11.5273 23.5288L19.0559 16.0002L11.5273 8.47157C11.2669 8.21122 11.2669 7.78911 11.5273 7.52876Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

export const Feathericonchevronleft = ({ fill = 'currentColor', ...props }: IconProps) => (
  <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.4701 7.52876C20.7305 7.78911 20.7305 8.21122 20.4701 8.47157L12.9415 16.0002L20.4701 23.5288C20.7305 23.7891 20.7305 24.2112 20.4701 24.4716C20.2098 24.7319 19.7876 24.7319 19.5273 24.4716L11.5273 16.4716C11.2669 16.2112 11.2669 15.7891 11.5273 15.5288L19.5273 7.52876C19.7876 7.26841 20.2098 7.26841 20.4701 7.52876Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

export const Feathericonmenu = ({ fill = 'currentColor', ...props }: IconProps) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      d="M2.5 18C2.5 17.7239 2.72386 17.5 3 17.5H21C21.2761 17.5 21.5 17.7239 21.5 18C21.5 18.2761 21.2761 18.5 21 18.5H3C2.72386 18.5 2.5 18.2761 2.5 18Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

export const IconMap = {
  arrowRight: Feathericonchevronright,
  arrowLeft: Feathericonchevronleft,
  burger: Feathericonmenu,
  login: Feathericonlogin,
};

export type IconName = keyof typeof IconMap;
