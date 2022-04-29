import React,{useState} from 'react'

const FormInput = (props) => {
    const [valid, setValid] = useState(false);
    const {label, onChange,errorMessage, id, ...inputProps} = props;
  return (
    <div className="mb-6">
      <label className="block text-xs text-dark">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}

        className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
      />
      {/* <span className="text-sm text-red-700 ">
        {errorMessage}
      </span> */}
    </div>
  );
}

export default FormInput;