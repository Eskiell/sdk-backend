/* tslint:disable */
/* eslint-disable */
/**
 * MVPs
 * API
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { IUser } from './iuser';
/**
 * 
 * @export
 * @interface IUserResponse
 */
export interface IUserResponse {
    /**
     * 
     * @type {IUser}
     * @memberof IUserResponse
     */
    user: IUser;
    /**
     * 
     * @type {string}
     * @memberof IUserResponse
     */
    accessToken: string;
}
