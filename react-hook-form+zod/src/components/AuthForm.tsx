// import './App.css';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '../formSchema.ts';
import Input from './Input.tsx';
import Checkbox from './Checkbox.tsx';
// import { FormSchema } from './formSchema.ts';
// import Input from './components/Input.tsx';
// import Checkbox from './components/Checkbox.tsx';

function AuthForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
      remember_me: false,
    },
    resolver: zodResolver(FormSchema),
  });

  const handleOnSubmitForm = (props: FormSchema) => {
    console.log('handleOnSubmitForm', props);
  };

  return (
    <div className={'flex gap-5'}>
      <section className="flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(handleOnSubmitForm)}
          className={
            'flex flex-col border rounded-lg shadow-2xl p-12 items-center'
          }
        >
          {/*<label htmlFor="email">Email</label>*/}
          {/*<input {...register("email")} id="email" type="email" placeholder="Email"*/}
          {/*       className={"rounded mb-4 p-1"}/>*/}
          {/*<span className={"text-red-500"}>{errors.email?.message}</span>*/}

          {/*<label htmlFor="password">Password</label>*/}
          {/*<input {...register("password")} id="password" type="password" placeholder="Password"*/}
          {/*       className={"rounded mb-4 p-1"}/>*/}
          {/*<span className={"text-red-500"}>{errors.password?.message}</span>*/}

          {/*<input {...register("confirm_password")} id="confirm_password" type="password" placeholder="Password"*/}
          {/*       className={"rounded mb-4 p-1"}/>*/}
          {/*<span className={"text-red-500"}>{errors.confirm_password?.message}</span>*/}

          <Input
            {...register('email')}
            label="Email"
            errorMessage={errors.email?.message}
          />
          <Input
            {...register('password')}
            label="Password"
            errorMessage={errors.password?.message}
          />
          <Input
            {...register('confirm_password')}
            label="Password"
            errorMessage={errors.confirm_password?.message}
          />

          <button type={'submit'}>REGISTER</button>

          <Controller
            name={'remember_me'}
            control={control}
            render={({ field }) => (
              <Checkbox checked={field.value} onChange={field.onChange} />
            )}
          />
        </form>
      </section>
    </div>
  );
}

export default AuthForm;
