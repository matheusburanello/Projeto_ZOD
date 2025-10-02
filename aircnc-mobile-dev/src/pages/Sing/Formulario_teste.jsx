import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schema de validação do formulário
const bookSchema = z.object({
    date: z.string()
      .min(1, "A data é obrigatória") // Garante que o campo "date" seja obrigatório
  });

type BookFormData = z.infer<typeof bookSchema>;

export default function Book() {
  // useForm integrado com Zod 
  const { register, handleSubmit, formState: { errors } } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema)
  });

  // Função chamada quando o formulário for válido
  const onSubmit = (data: BookFormData) => {
    console.log('Reserva realizada:', data);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Digite a data da reserva"
        {...register('date')} //  Conexão do input com o react-hook-form
        style={{
          borderWidth: 1,
          borderColor: errors.date ? 'red' : 'gray', //  muda a cor se tiver erro
          marginBottom: 8,
          padding: 8,
          borderRadius: 4
        }}
      />
      {errors.date && <Text style={{ color: 'red' }}>{errors.date.message}</Text>} 

      <Button title="Reservar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
