'use client';

import { ChangeEvent, useState } from 'react';
import styles from './FormInput.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

interface Props {
  type: 'text' | 'email' | 'password';
  label: string;
  placeholder: string;
  value: any;
  setValue: any;
  error: null | string;
  clearError: any;
}

const FormInput: React.FC<Props> = ({
  type,
  label,
  placeholder,
  value,
  setValue,
  error,
  clearError,
}) => {
  const dispatch = useDispatch();

  const [passwordCurrentType, setPasswordCurrentType] = useState<
    'text' | 'password'
  >('password');

  const handleVisibilityToggle = () => {
    if (passwordCurrentType === 'password') {
      setPasswordCurrentType('text');
    } else {
      setPasswordCurrentType('password');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(clearError());
    dispatch(setValue(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label>{label}</label>

        <div>
          <input
            autoComplete="off"
            type={type === 'password' ? passwordCurrentType : type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
            //   className={value.length > 0 ? styles.formInput__input_valid : ''}
          />

          {type === 'password' && (
            <div
              className={styles.passwordToggle}
              onClick={handleVisibilityToggle}
            >
              {passwordCurrentType === 'password' ? <FaEyeSlash /> : <FaEye />}
            </div>
          )}
        </div>
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default FormInput;
