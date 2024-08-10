import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const Scroll = ({ children }: Props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '1000px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
