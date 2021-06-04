/* tslint:disable */
/* eslint-disable */
/**
 * Service Registry Service - Fleet Manager - v1
 * Main entry point for the system, responsible for all sorts of management operations for the whole service of managed service registry.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RegistryStatus } from './registry-status';

/**
 * Service Registry instance within a multi-tenant deployment.
 * @export
 * @interface Registry
 */
export interface Registry {
    /**
     * 
     * @type {string}
     * @memberof Registry
     */
    id: string;
    /**
     * 
     * @type {RegistryStatus}
     * @memberof Registry
     */
    status: RegistryStatus;
    /**
     * 
     * @type {string}
     * @memberof Registry
     */
    registryUrl: string;
    /**
     * User-defined Registry name. Does not have to be unique.
     * @type {string}
     * @memberof Registry
     */
    name?: string;
    /**
     * Identifier of a multi-tenant deployment, where this Service Registry instance resides.
     * @type {number}
     * @memberof Registry
     */
    registryDeploymentId?: number;
}


