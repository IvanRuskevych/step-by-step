import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, ...rest }, ref) => {
    const id = useId();
    return (
      <>
        {!!label && <label htmlFor={id}>{label}</label>}

        {/* {...rest} === {...register("password")} id="password"/id={id} type="password" placeholder="Password"} */}
        <input
          {...rest}
          ref={ref}
          id={id}
          className={'rounded mb-4 p-1 bg-gray-500 text-white'}
        />

        {!!errorMessage && (
          <span className={'text-red-500'}>{errorMessage}</span>
        )}
      </>
    );
  },
);

export default Input;
