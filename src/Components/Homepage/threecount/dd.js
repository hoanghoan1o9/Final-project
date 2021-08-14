import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import "./CalculateBMR.module.css";


const CalculateBMI = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState("");
  
    // const [disabled, setDisabled] = useState(false);
  
    function calculateBMI() {
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
  
      setBmiResult(bmi);
  
      let bmiStatus = getStatus(bmi);
  
      setStatus(bmiStatus);
      setHeight("");
      setWeight("");
    }
  
    function getStatus(bmi) {
      if (bmi < 18.5) return "Underweight";
      else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
      else if (bmi >= 25 && bmi <= 29.9) return "Overweight";
      else if (bmi >= 30 && bmi <= 34.9) return "Obese";
      else return "Dangerous Obesity";
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Your Height</label>
            <input type="number" {...register("Height")} />
            <label>Your Weight</label>
            <input type="number" {...register("Weight")} />
            <input type="submit" />
        </form>
    );
}


export default CalculateBMI;