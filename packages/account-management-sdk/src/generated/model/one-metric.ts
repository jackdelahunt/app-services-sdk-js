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


import { ClusterMetricsNodes } from './cluster-metrics-nodes';
import { ClusterResource } from './cluster-resource';
import { ClusterUpgrade } from './cluster-upgrade';

/**
 * 
 * @export
 * @interface OneMetric
 */
export interface OneMetric {
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    cloud_provider: string;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    cluster_type: string;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    compute_nodes_cpu: ClusterResource;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    compute_nodes_memory: ClusterResource;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    compute_nodes_sockets: ClusterResource;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    console_url: string;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    cpu: ClusterResource;
    /**
     * 
     * @type {number}
     * @memberof OneMetric
     */
    critical_alerts_firing: number;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    health_state?: OneMetricHealthStateEnum;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    memory: ClusterResource;
    /**
     * 
     * @type {ClusterMetricsNodes}
     * @memberof OneMetric
     */
    nodes: ClusterMetricsNodes;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    openshift_version: string;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    operating_system: string;
    /**
     * 
     * @type {number}
     * @memberof OneMetric
     */
    operators_condition_failing: number;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    query_timestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    region: string;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    sockets: ClusterResource;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof OneMetric
     */
    state_description: string;
    /**
     * 
     * @type {ClusterResource}
     * @memberof OneMetric
     */
    storage: ClusterResource;
    /**
     * 
     * @type {number}
     * @memberof OneMetric
     */
    subscription_cpu_total: number;
    /**
     * 
     * @type {number}
     * @memberof OneMetric
     */
    subscription_obligation_exists: number;
    /**
     * 
     * @type {number}
     * @memberof OneMetric
     */
    subscription_socket_total: number;
    /**
     * 
     * @type {ClusterUpgrade}
     * @memberof OneMetric
     */
    upgrade: ClusterUpgrade;
}

/**
    * @export
    * @enum {string}
    */
export enum OneMetricHealthStateEnum {
    Healthy = 'healthy',
    Unhealthy = 'unhealthy',
    Unknown = 'unknown'
}



