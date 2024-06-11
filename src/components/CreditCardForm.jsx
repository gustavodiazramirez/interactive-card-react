import React, { useState, useEffect } from "react";
import * as yup from "yup";
import CreditCardView from "./CreditCardView";

const schema = yup.object().shape({
  cardholderName: yup.string().required("El nombre del titular es obligatorio"),
  cardNumber: yup
    .string()
    .required("El número de tarjeta es obligatorio")
    .max(19, "El número de tarjeta debe tener 16 dígitos"),
  expMonth: yup
    .string()
    .required("El mes de expiración es obligatorio")
    .length(2, "El mes de expiración debe tener 2 dígitos"),
  expYear: yup
    .string()
    .required("El año de expiración es obligatorio")
    .length(2, "El año de expiración debe tener 2 dígitos"),
  cvc: yup
    .string()
    .required("El código CVC es obligatorio")
    .length(3, "El código CVC debe tener 3 dígitos"),
});

const CreditCardForm = () => {
  const [values, setValues] = useState({
    cardholderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({
    cardholderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar si se ha enviado el formulario

  useEffect(() => {
    if (isSubmitted) {
      schema
        .validate(values, { abortEarly: false })
        .then(() => {
          console.log("Formulario válido: ", values);
          setErrors({});
        })
        .catch((error) => {
          // Si hay errores, los establecemos en el estado
          const newErrors = {};
          error.inner.forEach((err) => {
            newErrors[err.path] = err.message;
          });
          setErrors(newErrors);
        });
    }
  }, [values, isSubmitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    let formattedValue;

    if (name === "cardNumber") {
        formattedValue = value
            .replace(/[^\d]/g, "") // Eliminar cualquier carácter que no sea un dígito
            .slice(0, 16) // Limitar a 16 caracteres
            .replace(/(\d{4})/g, "$1 "); // Insertar un espacio cada cuatro caracteres
    } else {
        formattedValue = value; // Dejar el valor intacto para otros campos
    }

    setValues({
        ...values,
        [name]: formattedValue, // No aplicar .trim() para permitir espacios en el nombre
    });

    if (errors[name] && isSubmitted) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    }
};


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-end lg:pr-80 lg:-mb-48 lg:pt-32 -mb-56">
        <CreditCardView values={values} errors={errors} />
      </div>
      <div className="flex flex-col min-h-screen justify-center lg:items-end lg:pr-80 items-center lg:pt-0 pt-80">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="cardholderName"
              className="block mb-1 uppercase font-body text-[10px] tracking-widest"
            >
              cardholder name
            </label>
            <input
              id="cardholderName"
              name="cardholderName"
              type="text"
              value={values.cardholderName}
              onChange={handleChange}
              className={`w-80 p-2 border rounded-lg mb-3 ${
                errors.cardholderName ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="e.g Jane Appleseed"
            />
            {errors.cardholderName && (
              <p className="text-red-500 text-xs -mt-2">
                {errors.cardholderName}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block mb-1 uppercase font-body text-[10px] tracking-widest"
            >
              card number
            </label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={values.cardNumber}
              onChange={handleChange}
              maxLength={19}
              className={`w-80 p-2 border rounded-lg mb-3 ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="e.g 1234 5678 1234 5678"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs -mt-2">{errors.cardNumber}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <div className="mr-4">
              <label
                htmlFor="expMonth"
                className="block mb-1 uppercase font-body text-[10px] tracking-widest"
              >
                exp. date (mm/yy)
              </label>
              <div className="flex">
                <input
                  id="expMonth"
                  name="expMonth"
                  type="text"
                  value={values.expMonth}
                  onChange={handleChange}
                  className={`w-16 p-2 border mr-2 ${
                    errors.expMonth || errors.expYear
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                  placeholder="MM"
                  maxLength={2}
                />
                <input
                  id="expYear"
                  name="expYear"
                  type="text"
                  value={values.expYear}
                  onChange={handleChange}
                  className={`w-16 p-2 border ${
                    errors.expYear || errors.expMonth
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                  placeholder="YY"
                  maxLength={2}
                />
              </div>
           
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block mb-1 uppercase font-body text-[10px] tracking-widest"
              >
                CVC
              </label>
              <input
                id="cvc"
                name="cvc"
                type="text"
                value={values.cvc}
                onChange={handleChange}
                className={`w-40 rounded-lg p-2 border ${
                  errors.cvc ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="CVC"
                maxLength={3}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-neutral-very-dark-violet text-white py-2 px-4 rounded w-80 mt-4"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default CreditCardForm;
