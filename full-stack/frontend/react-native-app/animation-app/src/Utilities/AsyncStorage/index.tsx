import AsyncStorage from '@react-native-community/async-storage';

export const AsyncSet = ({ key, data, isObject }: any) => {
    const value = isObject ? JSON.stringify(data) : data
    return AsyncStorage.setItem(key, value)
}

export const AsyncGet = ({ key }: any) => {
    return AsyncStorage.getItem(key)
}

export const AsyncRemove = ({ key }: any) => {
    return AsyncStorage.removeItem(key)
}

export const AsyncClear = () => {
    return AsyncStorage.clear()
}