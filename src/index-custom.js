import initCallback from './util/initCallback.js'  // OPTIONAL if you use your own init scripting
import removeDataAPI from './util/removeDataAPI.js'  // OPTIONAL if you use your own init scripting
import componentsInit from './util/componentsInit.js' // OPTIONAL if you use your own init scripting
import {version as Version} from './../package.json'
import one from 'shorter.js'


import Modal from './components/modal-native.js'
// add more components you need HERE

// OPTIONAL if you use your own init scripting
componentsInit.Modal = [ Modal, '[data-toggle="modal"]' ]
// add other components similarly here

// bulk initialize all components
// OPTIONAL if you use your own init scripting
document.body ? initCallback() : one( document, 'DOMContentLoaded', initCallback );  

export default {
	Modal,

  initCallback, // OPTIONAL if you use your own init scripting
  removeDataAPI, // OPTIONAL if you use your own init scripting
  componentsInit, // OPTIONAL if you use your own init scripting
  Version // OPTIONAL as well
}