import { z } from 'zod';

export const FormSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Too shirt'),
    confirm_password: z.string().min(1, 'Too shirt'),
    remember_me: z.boolean(),
  })
  .refine(data => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: "Passwords don't match",
  });

export type FormSchema = z.infer<typeof FormSchema>;

//==================0
const ingredientSchema = z.object({
  name: z.string(),
  qty: z.number(),
  unit: z.union([z.literal('g'), z.literal('l')]),
});

export const formSchemaRecipe = z.object({
  title: z.string(),
  ingredients: z.array(ingredientSchema),
});

export type FormRecipeValues = z.infer<typeof formSchemaRecipe>;
