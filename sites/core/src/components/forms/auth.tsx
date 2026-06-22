import { Alert, AlertDescription, AlertTitle } from "@shadcn/base/components/ui/alert";
import { Button } from "@shadcn/base/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shadcn/base/components/ui/card";
import { Field, FieldError, FieldLabel } from "@shadcn/base/components/ui/field";
import { InputGroup, InputGroupInput } from "@shadcn/base/components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@shadcn/base/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "@shadcn/base/lib/utils";
import { AppLoadContext, Link, useFetcher, useSubmit } from "react-router";

import { useAppStrings } from "~/values/strings/app";
import { useFormStrings } from "~/values/strings/forms";

import {
  AlertCircleIcon,
  InfoIcon,
  LoaderCircleIcon,
} from "@shadcn/base/icons";

import {
  useForm,
  Controller,
  Form,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import { useT } from "@/context/hono";
import { createLoginSchema, createOtpVerificationSchema, LegacyLoginSchema, LegacyOTPVerificationSchema } from "~/values/validations/legacy";
import { PropsWithChildren, useMemo } from "react";

type LegacyLoginFormProps = PropsWithChildren<{}>

export function LegacyLoginForm(props: LegacyLoginFormProps) {
  const submit = useSubmit()
  const t = useT()
  const formStrings = useFormStrings()
  const appStrings = useAppStrings()
  const loginSchema = useMemo(() => createLoginSchema(t), [t])

  const form = useForm<LegacyLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      form: 'login',
      username: '',
    },
  })

  return (
    <Card className='w-80'>
      <CardHeader>
        <img src={appStrings.rbpiLogo} className='max-w-[6ch] grayscale' />
        <CardTitle className='text-xl'>
          { formStrings.legacy.loginTitleString }
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form 
          id="legacyFormLogin"
          control={form.control}
          onSubmit={async ({ data }) => {
            await submit(data, { method: 'POST', encType: 'application/json' })
          }}>

          <Controller
            name='username'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>
                  { formStrings.legacy.loginFormStrings.usernameTitle }
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    placeholder={ formStrings.legacy.loginFormStrings.usernamePlaceholder }
                    aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <AlertCircleIcon size={16} className='mr-1.5 text-red-400' />}
                </InputGroup>
                { fieldState.invalid && <FieldError errors={[ fieldState.error ]} /> }
              </Field>
            )} />

        </Form>
      </CardContent>
      <CardFooter>
        <Button className='w-full' form="legacyFormLogin">
          { form.formState.isSubmitting && <LoaderCircleIcon className='animate-spin' /> }
          { formStrings.legacy.loginFormStrings.formSubmitButton }
        </Button>
      </CardFooter>
    </Card>
  )
}

type LegacyLoginOTPFormProps = PropsWithChildren<{
  id: number
  email: string
  sent: boolean
}>

export function LegacyLoginOTPForm(props: LegacyLoginOTPFormProps) {
  const submit = useSubmit()

  const t = useT()
  const formStrings = useFormStrings()
  const appStrings = useAppStrings()

  const otpSchema = useMemo(() => createOtpVerificationSchema(t), [ t ])

  const { id, email } = props
  
  const form = useForm<LegacyOTPVerificationSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: { form: 'otp', id, email },
  })

  return (
    <div className='flex flex-col gap-2 max-w-80'>
      <Card>
        <CardHeader>
          <img src={appStrings.rbpiLogo} className='max-w-[6ch] grayscale' />
          <CardTitle className='text-xl'>
            { formStrings.legacy.verificationTitleString }
          </CardTitle>
          <CardDescription>
            { formStrings.legacy.verificationFormStrings.formDescription }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form 
            id="legacyFormVerification"
            control={form.control}
            onSubmit={async ({ data }) => {
              await submit(data, { method: 'POST', encType: 'application/json' })
            }}>

            <Controller
              name="otp"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel 
                    className='font-normal'
                    htmlFor={field.name}>
                    { formStrings.legacy.verificationFormStrings.formOtpCodeTitle }
                  </FieldLabel>
                  <InputOTP 
                    id={field.name}
                    {...field}
                    value={String(field.value ?? '')}
                    onChange={val => field.onChange(Number(val))}
                    maxLength={6}
                    inputMode='numeric'
                    containerClassName='w-full no-scrollbar'
                    placeholder={ formStrings.legacy.verificationFormStrings.formOtpCodePlaceholder }
                    pattern={REGEXP_ONLY_DIGITS}>
                    <InputOTPGroup className='w-full'>
                      <InputOTPSlot index={0} className='flex-1' />
                      <InputOTPSlot index={1} className='flex-1' />
                      <InputOTPSlot index={2} className='flex-1' />
                      <InputOTPSlot index={3} className='flex-1' />
                      <InputOTPSlot index={4} className='flex-1' />
                      <InputOTPSlot index={5} className='flex-1' />
                    </InputOTPGroup>
                  </InputOTP>
                  { fieldState.invalid && <FieldError errors={[fieldState.error]} /> }
                </Field>
              )} />

          </Form>
        </CardContent>
        <CardFooter className='flex-col'>
          <Button className='w-full' form="legacyFormVerification">
            { form.formState.isSubmitting && <LoaderCircleIcon className='animate-spin' /> }
            { formStrings.legacy.verificationFormStrings.formOtpCodeSubmitButton }
          </Button>
          <Button 
            asChild
            className='font-normal'
            variant={'link'}>
            <Link to={'/login'}>
              { formStrings.legacy.verificationFormStrings.formOtpCodeResend }
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Alert 
        className='bg-zinc-100'
        variant={'default'}>
        <InfoIcon />
        <AlertTitle className='font-normal'>
          { formStrings.legacy.verificationSentToEmailAlertTitle }
        </AlertTitle>
        <AlertDescription className='text-xs'>
          { formStrings.legacy.verificationSentToEmailString(props.email) }
        </AlertDescription>
      </Alert>
    </div>
  )
}

