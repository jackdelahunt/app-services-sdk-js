/* tslint:disable */
/* eslint-disable */
/**
 * Account Management Service API
 * Manage user subscriptions and clusters
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SummaryMetrics } from './summary-metrics';

/**
 * 
 * @export
 * @interface SummaryAllOf
 */
export interface SummaryAllOf {
    /**
     * 
     * @type {Array<SummaryMetrics>}
     * @memberof SummaryAllOf
     */
    metrics: Array<SummaryMetrics>;
    /**
     * 
     * @type {string}
     * @memberof SummaryAllOf
     */
    name?: string;
}


