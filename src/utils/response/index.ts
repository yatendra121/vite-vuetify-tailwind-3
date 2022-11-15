type ErrorCode = string | null
type Errors = any | null
type Message = string | null
type Error = string | null
type ServerError = any | null

export interface ApiDataResponse<T = any> {
    data: T | null
    errorCode: ErrorCode
    errors: Errors
    error: Error
    message: Message
    serverError: ServerError
}

export interface ApiResponseInterface<T = any> {
    getData: () => T | null
    getErrorCode: () => ErrorCode
    getErrors: () => Errors
    getMessage: () => Message
    getError: () => string | null
}

class ApiResponse<T> implements ApiResponseInterface<T> {
    private data = <T | null>null
    private errorCode: ErrorCode = null
    private error: Error = null
    private errors: Errors = null
    private message: Message = ''
    constructor(response: ApiDataResponse) {
        this.data = response.data
        this.error = response.error
        this.errors = response.errors
        this.message = response.message
    }

    /**
     * Returns the id of the [[BaseTx]]
     */
    getData() {
        return this.data
    }

    /**
     * Returns the id of the [[BaseTx]]
     */
    getErrorCode() {
        return this.errorCode
    }

    /**
     * Returns the id of the [[BaseTx]]
     */
    getError() {
        return this.error
    }

    /**
     * Returns the id of the [[BaseTx]]
     */
    getErrors() {
        return this.errors
    }

    /**
     * Returns the id of the [[BaseTx]]
     */
    getMessage() {
        return this.message
    }
}

export { ApiResponse }
