// import './App.css';
// import { Controller, useFieldArray, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { FormSchema } from './formSchema.ts';
// import Input from './components/Input.tsx';
// import Checkbox from './components/Checkbox.tsx';
import AuthForm from './components/AuthForm.tsx';
import AddIngredientForm from './components/AddIngredientForm.tsx';

function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<FormSchema>({
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //     confirm_password: '',
  //     remember_me: false,
  //
  //     ingredients: [],
  //     title: '',
  //   },
  //   resolver: zodResolver(FormSchema),
  // });
  // const { fields, append } = useFieldArray({
  //   control,
  //   name: 'ingredients',
  // });
  //
  // const handleOnSubmitForm = (props: FormSchema) => {
  //   console.log('handleOnSubmitForm', props);
  // };

  return (
    <div className={'flex gap-5'}>
      <AuthForm />
      <AddIngredientForm />
      {/*<section className="flex items-center justify-center ">*/}
      {/*  <form*/}
      {/*    onSubmit={handleSubmit(handleOnSubmitForm)}*/}
      {/*    className={*/}
      {/*      'flex flex-col border rounded-lg shadow-2xl p-12 items-center'*/}
      {/*    }*/}
      {/*  >*/}
      {/*    /!*<label htmlFor="email">Email</label>*!/*/}
      {/*    /!*<input {...register("email")} id="email" type="email" placeholder="Email"*!/*/}
      {/*    /!*       className={"rounded mb-4 p-1"}/>*!/*/}
      {/*    /!*<span className={"text-red-500"}>{errors.email?.message}</span>*!/*/}

      {/*    /!*<label htmlFor="password">Password</label>*!/*/}
      {/*    /!*<input {...register("password")} id="password" type="password" placeholder="Password"*!/*/}
      {/*    /!*       className={"rounded mb-4 p-1"}/>*!/*/}
      {/*    /!*<span className={"text-red-500"}>{errors.password?.message}</span>*!/*/}

      {/*    /!*<input {...register("confirm_password")} id="confirm_password" type="password" placeholder="Password"*!/*/}
      {/*    /!*       className={"rounded mb-4 p-1"}/>*!/*/}
      {/*    /!*<span className={"text-red-500"}>{errors.confirm_password?.message}</span>*!/*/}

      {/*    <Input*/}
      {/*      {...register('email')}*/}
      {/*      label="Email"*/}
      {/*      errorMessage={errors.email?.message}*/}
      {/*    />*/}
      {/*    <Input*/}
      {/*      {...register('password')}*/}
      {/*      label="Password"*/}
      {/*      errorMessage={errors.password?.message}*/}
      {/*    />*/}
      {/*    <Input*/}
      {/*      {...register('confirm_password')}*/}
      {/*      label="Password"*/}
      {/*      errorMessage={errors.confirm_password?.message}*/}
      {/*    />*/}

      {/*    <button type={'submit'}>REGISTER</button>*/}

      {/*    <Controller*/}
      {/*      name={'remember_me'}*/}
      {/*      control={control}*/}
      {/*      render={({ field }) => (*/}
      {/*        <Checkbox checked={field.value} onChange={field.onChange} />*/}
      {/*      )}*/}
      {/*    />*/}
      {/*  </form>*/}
      {/*</section>*/}

      {/*new form*/}
      {/*<section className="flex items-center justify-center ">*/}
      {/*  <form*/}
      {/*    onSubmit={handleSubmit(handleOnSubmitForm)}*/}
      {/*    className={*/}
      {/*      'flex flex-col border rounded-lg shadow-2xl p-12 items-center'*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <Input*/}
      {/*      {...register('title')}*/}
      {/*      label={'Title recipe'}*/}
      {/*      errorMessage={errors.title?.message}*/}
      {/*    />*/}

      {/*    {fields.map((field, i) => (*/}
      {/*      <div key={field.id}>*/}
      {/*        <Input {...register(`ingredients.${i}.name`)} />*/}
      {/*        <Input*/}
      {/*          type="number"*/}
      {/*          {...register(`ingredients.${i}.qty`, { valueAsNumber: true })}*/}
      {/*        />*/}
      {/*        <select {...register(`ingredients.${i}.unit`)}>*/}
      {/*          <option value="g">G</option>*/}
      {/*          <option value="l">L</option>*/}
      {/*        </select>*/}
      {/*      </div>*/}
      {/*    ))}*/}

      {/*    <button*/}
      {/*      type={'button'}*/}
      {/*      onClick={() => append({ name: '', qty: 0, unit: 'g' })}*/}
      {/*    >*/}
      {/*      Add ingredient*/}
      {/*    </button>*/}

      {/*    <button type={'submit'}>Save recipe</button>*/}
      {/*  </form>*/}
      {/*</section>*/}
    </div>
  );
}

export default App;
