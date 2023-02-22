import { toast } from "react-hot-toast";

export const emailValidation = (value: string) => {
  if (value) {
    if (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) {
      return "";
    } else {
      toast.error("Enter Valid email");
    }
  } else {
    toast.error("Enter Valid email");
  }
};

export const passwordValidation = (value: string) => {
  if (value) {
    if (
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
        value
      ) &&
      value.length <= 20
    ) {
      return "";
    } else {
      toast.error("Invalid password");
    }
  }
};

export const onlyTextValidation = (value: string) => {
  if (value) {
    if (/^[a-zA-Z ]*$/i.test(value)) {
      return "";
    } else {
      toast.error("Alpabetical letters only");
    }
  } else {
    return undefined;
  }
};

export const onlyNumberValidation = (value: string) => {
  if (value) {
    if (/^[0-9]*$/.test(value)) {
      return "";
    } else {
      toast.error("Numbers Only");
    }
  } else {
    return undefined;
  }
};

export const cardNumberValidation = (cardNumber: string) => {
  const regexPattern = {
    MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
    VISA: /^4[0-9]{2,}$/,
    AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
    DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
  };
  for (const card in regexPattern) {
    if (!cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
      continue;
    }
    if (cardNumber && card === "AMERICAN_EXPRESS") {
      return cardNumber &&
        /^[1-6]{1}[0-9]{13,14}$/i.test(cardNumber.replace(/[^\d]/g, "").trim())
        ? ""
        : toast.error("Enter a Valid Card");
    } else {
      return cardNumber &&
        /^[1-6]{1}[0-9]{15,16}$/i.test(cardNumber.replace(/[^\d]/g, "").trim())
        ? ""
        : toast.error("Enter a Valid Card");
    }
  }
  return toast.error("Enter a Valid Card");
};

export const securityCodeValidation = (min: number, value: string) =>
  value.length < 3
    ? toast.error("must be 3 digits")
    : toast.success("input correct");
