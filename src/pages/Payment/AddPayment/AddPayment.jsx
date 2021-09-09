import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./../../../components/InputField/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/InputField/CustomButton/CustomButton";
import CustomSelect from "../../../components/InputField/CustomSelect/CustomSelect";
import CustomTextArea from "../../../components/InputField/CustomTextArea/CustomTextArea";

const AddPayment = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Add Payment</h4>
        <h4>
          <Link to="/payment/addPayment">Payment List</Link>
        </h4>
      </div>
      <div className="mt-3">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 p-3 first-name">
              <CustomInput
                placeHolder={"Patient Name"}
                inputType={"text"}
                {...register("patientName", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 last-name">
              <CustomInput
                placeHolder={"Account Name"}
                inputType={"text"}
                {...register("accountName", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 last-name">
              <CustomInput
                placeHolder={"Payment Date"}
                inputType={"text"}
                {...register("paymentDate", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 last-name">
              <CustomInput
                placeHolder={"Total Amount"}
                inputType={"number"}
                {...register("totalAmount", { required: true })}
              />
            </div>
            <div className="col-md-6 p-3 department">
              <CustomSelect
                placeHolder="Payment Method"
                selectOptions={["Debit Card", "Credit Card"]}
                register={register}
              />
            </div>
            <div className="col-md-6 p-3 department">
              <CustomSelect
                placeHolder="Payment Status"
                selectOptions={["Complete", "Pending"]}
                register={register}
              />
            </div>
            <div className="col-md-12 p-3 payment-description">
              <CustomTextArea
                placeHolder={"Description"}
                {...register("description", {
                  required: true,
                })}
              />
            </div>
            <div className="col-md-12 p-3 button">
              <CustomButton
                btnType={"btn"}
                btnTxt={"Reset"}
                color="secondary"
              />
              <CustomButton btnType={"submit"} btnTxt={"Submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPayment;
