import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button
} from '@chakra-ui/react';

const feedbackSchema = z.object({
  mentorName: z.string().min(1, 'Mentor name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  date: z.string().min(1, 'Date is required'),
  studentName: z.string().min(1, 'Student name is required'),
  studentId: z.string().min(1, 'Student ID is required'),
  studentCourse: z.string().min(1, 'Student course is required'),
  engagement: z.string().min(1, 'Engagement is required'),
  improvement: z.string().min(1, 'Areas of improvement are required'),
  concerns: z.string().min(1, 'Concerns are required'),
  progress: z.string().min(1, 'Overall progress is required'),
  comments: z.string().optional(),
});

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      bg='#523521'
      color='white'
      p={6}
      rounded='md'
      shadow='md'
      maxW='lg'
      mx='auto'
      mt={8}
    >
      <Heading as='h1' size='lg' mb={6} textAlign='center'>
        Feedback Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.mentorName}>
            <FormLabel htmlFor='mentorName'>Mentor Name</FormLabel>
            <Input id='mentorName' {...register('mentorName')} />
            <FormErrorMessage>
              {errors.mentorName && errors.mentorName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.phone}>
            <FormLabel htmlFor='phone'>Phone</FormLabel>
            <Input id='phone' {...register('phone')} />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id='email' type='email' {...register('email')} />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.date}>
            <FormLabel htmlFor='date'>Date</FormLabel>
            <Input id='date' type='date' {...register('date')} />
            <FormErrorMessage>
              {errors.date && errors.date.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.studentName}>
            <FormLabel htmlFor='studentName'>Student Name</FormLabel>
            <Input id='studentName' {...register('studentName')} />
            <FormErrorMessage>
              {errors.studentName && errors.studentName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.studentId}>
            <FormLabel htmlFor='studentId'>Student ID</FormLabel>
            <Input id='studentId' {...register('studentId')} />
            <FormErrorMessage>
              {errors.studentId && errors.studentId.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.studentCourse}>
            <FormLabel htmlFor='studentCourse'>Student Course</FormLabel>
            <Input id='studentCourse' {...register('studentCourse')} />
            <FormErrorMessage>
              {errors.studentCourse && errors.studentCourse.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.engagement}>
            <FormLabel htmlFor='engagement'>Engagement of Participation</FormLabel>
            <Textarea id='engagement' {...register('engagement')} />
            <FormErrorMessage>
              {errors.engagement && errors.engagement.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.improvement}>
            <FormLabel htmlFor='improvement'>Areas of Improvement</FormLabel>
            <Textarea id='improvement' {...register('improvement')} />
            <FormErrorMessage>
              {errors.improvement && errors.improvement.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.concerns}>
            <FormLabel htmlFor='concerns'>Concerns</FormLabel>
            <Textarea id='concerns' {...register('concerns')} />
            <FormErrorMessage>
              {errors.concerns && errors.concerns.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.progress}>
            <FormLabel htmlFor='progress'>Overall Progress</FormLabel>
            <Textarea id='progress' {...register('progress')} />
            <FormErrorMessage>
              {errors.progress && errors.progress.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='comments'>Additional Comments</FormLabel>
            <Textarea id='comments' {...register('comments')} />
          </FormControl>

          <Button type='submit' colorScheme='orange' width='full' mt={4}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Feedback;
