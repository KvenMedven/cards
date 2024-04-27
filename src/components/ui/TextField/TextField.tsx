import {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  forwardRef,
  useState,
} from "react";

import { Close } from "@/assets/icons/components/Close";
import { Eye } from "@/assets/icons/components/Eye";
import { EyeOff } from "@/assets/icons/components/EyeOff";
import { Search } from "@/assets/icons/components/Search";
import { useGetId } from "@/components/ui/TextField/useGetId";
import { Typography } from "@/components/ui/Typography";
import { clsx } from "clsx";

import s from "./TextField.module.scss";

type InputType = "password" | "search" | "text";
type Props = {
  error?: string;
  label?: string;
  onClearClick?: () => void;
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  variant: InputType;
} & ComponentPropsWithoutRef<"input">;
export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled,
      error,
      id,
      label,
      onClearClick,
      onEnter,
      onKeyDown,
      variant,
      ...restProps
    },
    ref,
  ) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === "Enter") {
        onEnter(e);
      }
      onKeyDown?.(e);
    };
    const classNames = {
      clearButton: clsx(s.clearButton, disabled && s.buttonDisabled),
      container: s.textFieldWrapper,
      error: s.errorWrapper,
      errorCaption: s.errorCaption,
      input: clsx(
        s.input,
        error && s.errorInput,
        variant === "password" && s.passwordInput,
        variant === "search" && s.searchInput,
      ),
      inputWrapper: s.inputWrapper,
      label: s.labelWrapper,
      passwordButton: clsx(s.passwordButton, disabled && s.buttonDisabled),
      searchButton: clsx(s.searchButton, disabled && s.buttonDisabled),
    };
    const inputId = useGetId(id);

    const isShowClearButton =
      variant === "search" && onClearClick && restProps?.value?.length! > 0;

    const finalType = (
      variant: InputType,
      showPassword: boolean,
    ): InputType => {
      if (variant === "password" && showPassword) {
        return "text";
      } else if (variant === "password" && !showPassword) {
        return "password";
      }

      return "text";
    };
    const togglerInputType = () => {
      setIsShowPassword((prevValue) => !prevValue);
    };

    return (
      <div className={classNames.container}>
        {label && (
          <div className={classNames.label}>
            <label htmlFor={inputId}>
              <Typography variant={"Body2"}>{label}</Typography>
            </label>
          </div>
        )}
        <div className={classNames.inputWrapper}>
          <input
            className={classNames.input}
            disabled={disabled}
            id={inputId}
            onKeyDown={handleKeyDown}
            type={finalType(variant, isShowPassword)}
            {...restProps}
            ref={ref}
          />
          {variant === "search" && (
            <button className={classNames.searchButton} disabled={disabled}>
              {<Search disabled={disabled} size={20} />}
            </button>
          )}
          {variant === "password" && (
            <button
              className={classNames.passwordButton}
              disabled={disabled}
              onClick={togglerInputType}
            >
              {isShowPassword ? (
                <EyeOff disabled={disabled} size={20} />
              ) : (
                <Eye disabled={disabled} size={20} />
              )}
            </button>
          )}
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClearClick}>
              <Close color={"red"} disabled={disabled} size={16} />
            </button>
          )}
        </div>
        {error && (
          <span className={classNames.error}>
            <Typography className={classNames.errorCaption} variant={"Caption"}>
              {error}
            </Typography>
          </span>
        )}
      </div>
    );
  },
);
