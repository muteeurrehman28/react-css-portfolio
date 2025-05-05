import { useEffect, useMemo } from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../../components/CustomInput';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Contact.module.css';
import React from 'react';

export default function Contact() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Contact');
    document.title = 'Portfolio | Contact';
  }, [setPageTitle]);

  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().required('Required').min(2, 'Name must be at least 2 characters'),
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
          .required('Required')
          .min(10, 'Message must be at least 10 characters'),
      }),
    []
  );

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm();
  };

  return (
    <Box className={`${styles.contact} fade-in`} component="section">
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
        component="h2"
      >
        Get in Touch
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form aria-label="Contact form">
                <CustomInput name="name" label="Name" />
                <CustomInput name="email" label="Email" type="email" />
                <CustomInput name="message" label="Message" multiline rows={4} />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ mt: 2, py: 1.5, px: 4 }}
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }} component="h3">
            Contact Information
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Email:</strong> example@portfolio.com
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Phone:</strong> (123) 456-7890
          </Typography>
          <Typography variant="body1">
            <strong>Location:</strong> New York, NY
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}