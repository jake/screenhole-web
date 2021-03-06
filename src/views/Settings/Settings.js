import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import styled from "styled-components";

import api from "../../utils/api";

import Button from "../../components/Button/Button";

const onSubmit = async values => {
  const update = await api.post("/users/current", { auth: values });
  console.log(update);

  if (!update.ok) {
    return { [FORM_ERROR]: "Edit Settings Failed" };
  }

  const currentUser = await api.get("/users/current");
  console.log(currentUser);

  if (!currentUser.ok) {
    return { [FORM_ERROR]: "Edit Settings Failed [2]" };
  }

  api.setCurrentUser(currentUser.data.user);

  // TODO: update state without hard reload
  // TODO: pass thru AuthContainer
  // this.props.history
  window.location = "/";
};

class Settings extends Component {
  render() {
    return (
      <Form
        onSubmit={onSubmit}
        initialValues={api.currentUser}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          }

          if (!values.username) {
            errors.username = "Required";
          }

          return errors;
        }}
        render={({
          handleSubmit,
          submitError,
          pristine,
          submitting,
          values,
        }) => {
          return (
            <Wrapper onSubmit={handleSubmit}>
              <h1>Settings</h1>

              <p>
                If you want to change your avatar, go to{" "}
                <a
                  href="https://gravatar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gravatar.com
                </a>{" "}
                and link it up to your Screenhole email address.
              </p>

              <Field name="email">
                {({ input, meta }) => (
                  <InputWrapper>
                    <Input
                      {...input}
                      type="email"
                      placeholder="you@email.com"
                      autoCapitalize="off"
                      autoCorrect="off"
                    />
                    <Label>
                      Email{" "}
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </Label>
                  </InputWrapper>
                )}
              </Field>
              <Field name="username">
                {({ input, meta }) => (
                  <InputWrapper>
                    <Input
                      {...input}
                      type="text"
                      placeholder="username"
                      autoCorrect="off"
                      autoCapitalize="off"
                    />
                    <Label>
                      Username{" "}
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </Label>
                  </InputWrapper>
                )}
              </Field>
              <Field name="name">
                {({ input, meta }) => (
                  <InputWrapper>
                    <Input
                      {...input}
                      type="text"
                      placeholder="Spiderman Jones"
                    />
                    <Label>
                      Name{" "}
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </Label>
                  </InputWrapper>
                )}
              </Field>
              <Field name="bio">
                {({ input, meta }) => (
                  <InputWrapper>
                    <Input
                      {...input}
                      type="text"
                      placeholder="Tell us about yerself"
                      autoComplete="off"
                    />
                    <Label>
                      Bio{" "}
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </Label>
                  </InputWrapper>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <InputWrapper>
                    <Input
                      {...input}
                      type="password"
                      placeholder="new password"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellcheck="false"
                      autoComplete="off"
                    />
                    <Label>
                      Leave blank to not change{" "}
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </Label>
                  </InputWrapper>
                )}
              </Field>
              <Field name="password_confirmation">
                {({ input, meta }) => (
                  <InputWrapper>
                    <Input
                      {...input}
                      type="password"
                      placeholder="new password confirmation"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellcheck="false"
                      autoComplete="off"
                    />
                    <Label>
                      Leave blank to not change{" "}
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </Label>
                  </InputWrapper>
                )}
              </Field>

              {submitError && <div className="error">{submitError}</div>}

              <Button type="submit" disabled={submitting}>
                Save
              </Button>
            </Wrapper>
          );
        }}
      />
    );
  }
}

export default Settings;

const Wrapper = styled.form`
  max-width: 320px;
  margin: 0 auto;

  > p {
    color: #858090;
    margin-top: 1rem;
    line-height: 150%;
  }
`;

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 0.75rem 0;
  font-size: 1.75rem;
  border: 0;
  border-bottom: 2px solid var(--input-color);
  background-color: transparent;
  transition: all 0.2s ease;
  color: #fff;
  outline: none;

  &:focus {
    color: #fff;
    border-color: #fff;
  }

  ::-webkit-input-placeholder {
    color: var(--input-color);
  }
  ::-moz-placeholder {
    color: var(--input-color);
  }
  :-ms-input-placeholder {
    color: var(--input-color);
  }
  :-moz-placeholder {
    color: var(--input-color);
  }
`;

const Select = styled.select`
  appearance: textfield;
  width: 100%;
  display: block;
  padding: 0.75rem 0;
  font-size: 1.75rem;
  border: 0;
  border-bottom: 2px solid var(--input-color);
  background-color: transparent;
  transition: all 0.2s ease;
  color: #fff;
  outline: none;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;

const Option = styled.option``;

const Label = styled.label`
  color: var(--input-color);
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
  display: block;

  span {
    color: red;
  }
`;
