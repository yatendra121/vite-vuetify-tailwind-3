import { ApiResponse } from '@qnx/composables'
import { describe, beforeEach, it, expect, test } from 'vitest'

describe('ApiResponse', () => {
    let response: ApiResponse<unknown>
    beforeEach(() => {
        response = new ApiResponse({
            data: 'test data',
            errorCode: 'errorCode',
            errors: { error: ['test error'] },
            error: 'test error',
            message: 'test message',
            serverError: 'test serverError'
        })
    })
    test('getData should return the data property', () => {
        expect(response.getData()).toBe('test data')
    })
    test('getErrorCode should return the errorCode property', () => {
        expect(response.getErrorCode()).toBe('errorCode')
    })
    test('getError should return the error property', () => {
        expect(response.getError()).toBe('test error')
    })
    test('getErrors should return the errors property', () => {
        expect(response.getErrors()).toEqual({ error: ['test error'] })
    })
    test('getMessage should return the message property', () => {
        expect(response.getMessage()).toBe('test message')
    })
})
