import { ComponentPropsWithoutRef } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

function isAnchor(props: AnchorProps | ButtonProps): props is AnchorProps {
  return 'href' in props;
}

const Button = (props: AnchorProps | ButtonProps) => {
  if (isAnchor(props)) {
    return <a {...props} className='btn'></a>;
  }

  return <button {...props} className='btn'></button>;
};

export default Button;