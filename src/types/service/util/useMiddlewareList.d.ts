import { AxiosStatic } from "axios";

export function useRequestMiddleware(instance: AxiosStatic, middleware: Object): void;
export function useResponseMiddleware(instance: AxiosStatic, middleware: Object): void;
export function useMiddleware(instance: AxiosStatic, middleware: Object): void;
export function useMiddlewareList(instance: AxiosStatic, middlewareList: Object[]): void;
