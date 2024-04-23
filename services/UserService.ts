import type { AxiosResponse } from "axios";

const {$api} = useNuxtApp()

export default class UserService {

    static async registration(registrationData: { email: string, password: string }): Promise<AxiosResponse<UserAuth>> {
        const resp = await $api.post("/auth/login", registrationData);
        return resp;
    }

    static async login(loginData: { email: string, password: string }): Promise<AxiosResponse<UserAuth>> {
        const resp = await $api.post("/users/login", loginData);
        return resp;
    }

    static async getUser(): Promise<AxiosResponse<UserType>> {
        const resp = await $api.get("/auth/me");
        return resp;
    }

    static logout(): void {
        localStorage.removeItem("token");
    }
}