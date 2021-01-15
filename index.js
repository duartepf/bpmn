import BpmnJS from "bpmn-js/lib/Modeler";

import "bpmn-js/dist/assets/diagram-js.css";

import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import "./styles.css";

import diagram from "./diagram.bpmn";

const container = document.getElementById("container");

const bpmnJS = new BpmnJS({
  container,
  keyboard: {
    bindTo: document
  }
});

bpmnJS
  .importXML(diagram)
  .then(() => {
    const canvas = bpmnJS.get("canvas");

    canvas.zoom("fit-viewport");
  })
  .catch(err => console.log(err));
