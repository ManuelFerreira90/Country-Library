import { inputInterface } from './../../types/inputInterface';

function InputSearch({ className, value, onChange }: inputInterface) {
  return (
    <input className={className} type="text" value={value} placeholder="Search for a country..." onChange={onChange} required />
  )
}

export default InputSearch