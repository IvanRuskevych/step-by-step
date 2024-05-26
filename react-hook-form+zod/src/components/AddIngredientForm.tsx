import { useFieldArray, useForm } from 'react-hook-form';
import { FormRecipeValues } from '../formSchema.ts';
import Input from './Input.tsx';

function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormRecipeValues>({
    defaultValues: {
      ingredients: [],
      title: '',
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const handleOnSubmitForm = (props: FormRecipeValues) => {
    console.log('handleOnSubmitForm', props);
  };

  return (
    <div className={'flex gap-5'}>
      {/*new form*/}
      <section className="flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(handleOnSubmitForm)}
          className={
            'flex flex-col border rounded-lg shadow-2xl p-12 items-center'
          }
        >
          <Input
            {...register('title')}
            label={'Title recipe'}
            errorMessage={errors.title?.message}
          />

          {fields.map((field, i) => (
            <div key={field.id}>
              <Input {...register(`ingredients.${i}.name`)} />
              <Input
                type="number"
                {...register(`ingredients.${i}.qty`, { valueAsNumber: true })}
              />
              <select {...register(`ingredients.${i}.unit`)}>
                <option value="g">G</option>
                <option value="l">L</option>
              </select>
            </div>
          ))}

          <button
            type={'button'}
            onClick={() => append({ name: '', qty: 0, unit: 'g' })}
          >
            Add ingredient
          </button>

          <button type={'submit'}>Save recipe</button>
        </form>
      </section>
    </div>
  );
}

export default App;
