import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

export default function useTheme() {
  const appearanceFormSchema = toTypedSchema(
    z.object({
      theme: z.enum(['light', 'dark', 'auto'], {
        required_error: 'Please select a theme.'
      })
    })
  );

  const { store } = useColorMode();

  const { handleSubmit } = useForm({
    validationSchema: appearanceFormSchema,
    initialValues: {
      theme: store.value
    }
  });

  const onSubmit = handleSubmit((values) => {
    store.value = values.theme;
  });

  return {
    onSubmit,
    theme: store.value
  }
}
