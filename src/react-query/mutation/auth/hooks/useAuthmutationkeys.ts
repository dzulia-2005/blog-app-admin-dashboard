import { AUTH_MUTATUON_KEYS } from "@/react-query/mutation/auth/enum"

export const useAuthmutationkeys = () => {
    return {Login : AUTH_MUTATUON_KEYS.LOGIN}
}

export const useLogoutmutationkeys = () => {
    return {Logout:AUTH_MUTATUON_KEYS.LOGOUT }
}