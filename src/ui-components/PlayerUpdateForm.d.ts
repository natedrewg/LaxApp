/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Player } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerUpdateFormInputValues = {
    name?: string;
    status?: boolean;
    time?: string;
};
export declare type PlayerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerUpdateFormOverridesProps = {
    PlayerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    player?: Player;
    onSubmit?: (fields: PlayerUpdateFormInputValues) => PlayerUpdateFormInputValues;
    onSuccess?: (fields: PlayerUpdateFormInputValues) => void;
    onError?: (fields: PlayerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerUpdateFormInputValues) => PlayerUpdateFormInputValues;
    onValidate?: PlayerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerUpdateForm(props: PlayerUpdateFormProps): React.ReactElement;
