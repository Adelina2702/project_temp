export const usersDataSerializer = (data) => {
    return {
        ...data,
        name: data.firstName,
    }
}