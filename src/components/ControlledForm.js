import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ControlledForm = ({ addFeedback }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", message: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addFeedback({ ...values, type: "Controlled" });
      resetForm();
    },
  });

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}

        <textarea
          name="message"
          placeholder="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <div style={{ color: "red" }}>{formik.errors.message}</div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;

