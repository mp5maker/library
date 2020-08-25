import { FieldError } from "../../generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
    const errorMap: Record<string, string> = {} = errors.reduce((newErrors, { field, message }) => {
        return {
            ...newErrors,
            [field]: message
        }
    }, {})
    return errorMap
}