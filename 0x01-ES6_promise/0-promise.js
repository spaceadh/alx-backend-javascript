#!/usr/bin/env node

/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
export default function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}