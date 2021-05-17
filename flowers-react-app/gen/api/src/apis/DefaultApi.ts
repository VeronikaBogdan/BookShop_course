/* tslint:disable */
/* eslint-disable */
/**
 * Book Shop Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Book,
    BookFromJSON,
    BookToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface DinoRequest {
    date: string;
}

export interface ShopRequest {
    date?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns info on certain dino
     */
    async dinoRaw(requestParameters: DinoRequest): Promise<runtime.ApiResponse<Array<Book>>> {
        if (requestParameters.date === null || requestParameters.date === undefined) {
            throw new runtime.RequiredError('date','Required parameter requestParameters.date was null or undefined when calling dino.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Book/{date}`.replace(`{${"date"}}`, encodeURIComponent(String(requestParameters.date))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookFromJSON));
    }

    /**
     * Returns info on certain dino
     */
    async dino(requestParameters: DinoRequest): Promise<Array<Book>> {
        const response = await this.dinoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns list of books
     */
    async shopRaw(requestParameters: ShopRequest): Promise<runtime.ApiResponse<Array<Book>>> {
        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/shop`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookFromJSON));
    }

    /**
     * Returns list of books
     */
    async shop(requestParameters: ShopRequest): Promise<Array<Book>> {
        const response = await this.shopRaw(requestParameters);
        return await response.value();
    }

}