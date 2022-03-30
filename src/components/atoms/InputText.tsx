import React from 'react';

export interface IProps {
  value: string;
  updateValue: any;
}

const InputText = (props: IProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    props.updateValue(value);
  };

  const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(props.value);
    }
  };
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={onChange}
        onKeyPress={onCheckEnter}
      />
    </>
  );
};

export default InputText;
