export function getFieldElement(fieldName) {
    return document.querySelector(`[data-field="${fieldName}"]`);
};

export function getControlElement(fieldName) {
     return getFieldElement(fieldName).querySelector(`[data-control="${fieldName}"]`);
 }

export function getCaptionElement(fieldName) {
  return getFieldElement(fieldName).querySelector(`[data-caption="${fieldName}"]`);
 }