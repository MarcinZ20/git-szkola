import * as z from "zod/v4";

const POLISH_MOBILE_REGEX = /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?[4-8]\d{8}$/;

export const PhoneNumberValidator = z.regex(POLISH_MOBILE_REGEX);
