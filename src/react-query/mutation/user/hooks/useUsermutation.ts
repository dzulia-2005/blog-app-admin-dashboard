import { USER_MUTATION_KEYS } from "../enum"

export const useUserUpdatemutation = () => {
    return {userupdate : USER_MUTATION_KEYS.update}
} 

export const useUserCreatemutation = () => {
    return {userCreate : USER_MUTATION_KEYS.create}
}