import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = 'IsPublic';
export const AllowAnon = () => SetMetadata(IS_PUBLIC_KEY, true);