/**
 *
 * An interface representing Consignment.
 */

export interface ConsignmentTracking {
    /**
     * @member {string} [statusDisplay]
     */
    statusDisplay?: string;
    /**
     * @member {CarrierDetails} [carrierDetails]
     */
    carrierDetails?: CarrierDetails;
    /**
     * @member {ConsignmentTrackingEventData[]} [trackingEvents]
     */
    trackingEvents?: ConsignmentTrackingEventData[];
    /**
     * @member {string} [trackingUrl]
     */
    trackingUrl?: string;
    /**
     * @member {Date} [targetArrivalDate]
     */
    targetArrivalDate?: Date;
    /**
     * @member {string} [trackingID]
     */
    trackingID?: string;
  }

  export interface CarrierDetails{
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
  }

  export interface ConsignmentTrackingEventData{
    /**
     * @member {Date} [eventDate]
     */
    eventDate?: Date;
    /**
     * @member {string} [detail]
     */
    detail?: string;
    /**
     * @member {string} [location]
     */
    location?: string;
    /**
     * @member {string} [referenceCode]
     */
    referenceCode?: string;
  }

 