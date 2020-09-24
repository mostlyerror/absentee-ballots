import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const BallotForm = () => {
  const ref = useRef(null)
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    ref.current.submit();
  }

  return (
    <div className="container">
      <form 
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
      action="/thanks"
      name="ballot-request"
      method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="ballot-request" />

        <ul className="flex-outer">
          <li>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Vicky"
              name="firstName"
              ref={register({ required: true })}
            />
            {errors.firstName?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
          </li>

          <li>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Voter"
              name="lastName"
              ref={register({ required: true })}
            />
            {errors.lastName?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
          </li>

          <li>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              placeholder="123 Mulberry Lane"
              name="streetAddress"
              ref={register({ required: true })}
            />
            {errors.streetAddress?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
          </li>

          <li>
            <label htmlFor="streetAddress2">Address 2</label>
            <input
              type="text"
              placeholder="Suite 234"
              name="streetAddress2"
              ref={register}
            />
          </li>

          <li>
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Denver"
              name="city"
              ref={register({ required: true })}
            />
            {errors.city?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
          </li>

          <li>
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="CO"
              name="state"
              ref={register({ required: true })}
            />
            {errors.state?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
          </li>

          <li>
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              placeholder="80439"
              name="zip"
              ref={register({ required: true, minLength: 5, maxLength: 5 })}
            />
            {errors.zip?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
            {errors.zip?.type === "minLength" && (
              <span className="field-error">Must be 5 digits</span>
            )}
            {errors.zip?.type === "maxLength" && (
              <span className="field-error">Must be 5 digits</span>
            )}
          </li>

          <li>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="vickyvoter@gmail.com" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            {errors.email?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="field-error">Format: email@domain.com</span>
            )}
          </li>

          <li>
            <label htmlFor="mobile">Mobile Phone</label>
            <input type="tel" placeholder="555-555-5555" name="mobile" ref={register({required: true, minLength: 6, maxLength: 12})} />
            {errors.mobile?.type === "required" && (
              <span className="field-error">Required Field</span>
            )}
          </li>

          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
export default BallotForm;
