/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kakfa instances and connectors.
 *
 * The version of the OpenAPI document: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ServiceStatusKafkas } from './service-status-kafkas';

/**
 * Schema for the service status response body
 * @export
 * @interface ServiceStatus
 */
export interface ServiceStatus {
    /**
     * 
     * @type {ServiceStatusKafkas}
     * @memberof ServiceStatus
     */
    kafkas?: ServiceStatusKafkas;
}


