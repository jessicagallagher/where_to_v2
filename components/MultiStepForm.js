import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Edit from './Edit';

const steps = [
  { id: 'step1' },
  { id: 'step2' },
  { id: 'step3' },
  { id: 'edit' }
];

export default function MultiStepForm() {
  const [formData, setForm] = useForm('');
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case 'step1':
      return <Step1 {...props} />;
    case 'step2':
      return <Step2 {...props} />;
    case 'step3':
      return <Step3 {...props} />;
    case 'edit':
      return <Edit {...props} />;
    default:
      return null;
      console.log('lol switch stmt is broken again #neverforget');
  }
};