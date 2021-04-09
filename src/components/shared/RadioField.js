import React from 'react';
import classNames from 'classnames';

import './RadioField.css';

function RadioField({ className, label, autofocus, ...props }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={classNames(
        'radioField',
        { 'radioField--focused': false },
        className
      )}
    >
      <label className="radioField-label">
        <span>{label}</span>
        <input
          ref={inputRef}
          className="radioField-input"
          {...props}
        />
      </label>
    </div>
  );
}

export default RadioField;