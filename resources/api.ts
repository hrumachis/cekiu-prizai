import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'

//  -----------------------------------------------
/*  |   API
*/

// ---> Main API class
class Api {
    // ---> Setters
    // -> Set Origin Path

    // -> GET Packets
}

// -> Export Vue Prototype Javascript
// Export API class as prototype of Vue variable in JavaScript
export default function ApiPlugin( _Vue: typeof Vue ): void {
    _Vue.prototype.$api = new Api();
}

//  -> Declare Type
// Declare Type for Vue.$api variable in TypeScript
declare module 'vue/types/vue' {
    interface Vue {
      $api: Api;
    }
}