import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm } from "react-hook-form";
import { z } from "zod";

export default function useZodForm<T extends z.ZodType>(
    props: Omit<UseFormProps<T["_input"]>, "resolver"> & {
    schema: T
}) {
    const { schema, defaultValues, ...restProps } = props;
    const form = useForm<T["_input"]>({
        ...restProps,
        resolver: zodResolver(schema),
        defaultValues
    });

    return form;
}